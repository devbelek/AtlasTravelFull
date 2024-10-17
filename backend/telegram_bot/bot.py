import asyncio
import json
import logging
from telegram import Bot, Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import (
    ApplicationBuilder, CommandHandler, CallbackQueryHandler, ContextTypes
)
from django.conf import settings
from telegram_bot.utils import (
    get_all_unprocessed_inquiries, get_all_unprocessed_reviews,
    mark_inquiry_as_processed, mark_review_as_processed,
    get_unprocessed_about_us_inquiries, mark_about_us_inquiry_as_processed,
    get_statistics, get_admin_chat_ids,
    add_admin_user, remove_admin_user,
    is_admin
)
from asgiref.sync import sync_to_async
import redis

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

logger = logging.getLogger(__name__)
redis_client = redis.Redis.from_url(settings.REDIS_URL)
bot = Bot(token=settings.TELEGRAM_BOT_TOKEN)

# Проверка, является ли пользователь администратором
async def admin_only(handler):
    async def wrapper(update: Update, context: ContextTypes.DEFAULT_TYPE):
        chat_id = update.effective_chat.id
        if await sync_to_async(is_admin)(chat_id):
            return await handler(update, context)
        else:
            await update.message.reply_text("Доступ запрещен. Вы не являетесь администратором.")
    return wrapper

# Команда /start
@admin_only
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("Новые запросы", callback_data='new_inquiries')],
        [InlineKeyboardButton("Новые отзывы", callback_data='new_reviews')],
        [InlineKeyboardButton("Запросы 'О нас'", callback_data='about_us_inquiries')],
        [InlineKeyboardButton("Статистика", callback_data='statistics')]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        "Добро пожаловать, администратор! Выберите действие:",
        reply_markup=reply_markup
    )

# Обработка нажатий кнопок меню
@admin_only
async def button_callback(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()

    if query.data == 'new_inquiries':
        await new_inquiries(update, context)
    elif query.data == 'new_reviews':
        await new_reviews(update, context)
    elif query.data == 'about_us_inquiries':
        await about_us_inquiries(update, context)
    elif query.data == 'statistics':
        await show_statistics(update, context)

# Функции для отображения новых запросов, отзывов и статистики
@admin_only
async def new_inquiries(update: Update, context: ContextTypes.DEFAULT_TYPE):
    inquiries = await sync_to_async(get_all_unprocessed_inquiries)()
    if inquiries:
        for inquiry in inquiries:
            message = f"Новый запрос:\n\nТип: {inquiry._meta.verbose_name}\n"
            message += f"Имя: {inquiry.name}\nТелефон: {inquiry.phone_number}\nEmail: {inquiry.email}\nСообщение: {inquiry.message}\n"

            keyboard = [
                [InlineKeyboardButton(
                    "Отметить как обработанный",
                    callback_data=f'process_inquiry_{inquiry.id}_{inquiry._meta.model_name}'
                )]
            ]
            reply_markup = InlineKeyboardMarkup(keyboard)

            await context.bot.send_message(
                chat_id=update.effective_chat.id,
                text=message,
                reply_markup=reply_markup
            )
    else:
        await context.bot.send_message(chat_id=update.effective_chat.id, text="Новых запросов нет.")

@admin_only
async def new_reviews(update: Update, context: ContextTypes.DEFAULT_TYPE):
    reviews = await sync_to_async(get_all_unprocessed_reviews)()
    if reviews:
        for review in reviews:
            message = f"Новый отзыв:\n\nТип: {review._meta.verbose_name}\n"
            message += f"Имя: {review.full_name}\nОценка: {review.rate}\nКомментарий: {review.text}\n"

            keyboard = [
                [InlineKeyboardButton(
                    "Отметить как обработанный",
                    callback_data=f'process_review_{review.id}_{review._meta.model_name}'
                )]
            ]
            reply_markup = InlineKeyboardMarkup(keyboard)

            await context.bot.send_message(
                chat_id=update.effective_chat.id,
                text=message,
                reply_markup=reply_markup
            )
    else:
        await context.bot.send_message(chat_id=update.effective_chat.id, text="Новых отзывов нет.")

@admin_only
async def about_us_inquiries(update: Update, context: ContextTypes.DEFAULT_TYPE):
    inquiries = await sync_to_async(get_unprocessed_about_us_inquiries)()
    if inquiries:
        for inquiry in inquiries:
            message = f"Новый запрос 'О нас':\n\nТелефон: {inquiry.phone_number}\nДата создания: {inquiry.created_at}\n"

            keyboard = [
                [InlineKeyboardButton(
                    "Отметить как обработанный",
                    callback_data=f'process_about_us_{inquiry.id}'
                )]
            ]
            reply_markup = InlineKeyboardMarkup(keyboard)

            await context.bot.send_message(
                chat_id=update.effective_chat.id,
                text=message,
                reply_markup=reply_markup
            )
    else:
        await context.bot.send_message(chat_id=update.effective_chat.id, text="Новых запросов 'О нас' нет.")

@admin_only
async def show_statistics(update: Update, context: ContextTypes.DEFAULT_TYPE):
    stats = await sync_to_async(get_statistics)()
    message = "Статистика:\n\n"
    for key, value in stats.items():
        message += f"{key}: {value}\n"
    await context.bot.send_message(chat_id=update.effective_chat.id, text=message)

# Обработка нажатий кнопок "Отметить как обработанный"
@admin_only
async def process_item(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()

    data = query.data.split('_')
    action = data[1]
    item_id = int(data[2])
    model_name = data[3] if len(data) > 3 else None

    if action == 'inquiry':
        await sync_to_async(mark_inquiry_as_processed)(item_id, model_name)
        await query.edit_message_text(text="Запрос отмечен как обработанный.")
    elif action == 'review':
        await sync_to_async(mark_review_as_processed)(item_id, model_name)
        await query.edit_message_text(text="Отзыв отмечен как обработанный.")
    elif action == 'about':
        await sync_to_async(mark_about_us_inquiry_as_processed)(item_id)
        await query.edit_message_text(text="Запрос 'О нас' отмечен как обработанный.")

# Команды для добавления и удаления администратора
async def add_admin(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.effective_chat.id
    if await sync_to_async(is_admin)(chat_id):
        if len(context.args) != 1:
            await update.message.reply_text("Использование: /add_admin <chat_id>")
            return
        new_admin_chat_id = int(context.args[0])
        result = await sync_to_async(add_admin_user)(new_admin_chat_id)
        if result:
            await update.message.reply_text(f"Пользователь {new_admin_chat_id} добавлен как администратор.")
        else:
            await update.message.reply_text(f"Пользователь {new_admin_chat_id} уже является администратором.")
    else:
        await update.message.reply_text("Доступ запрещен. Вы не являетесь администратором.")

async def remove_admin(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.effective_chat.id
    if await sync_to_async(is_admin)(chat_id):
        if len(context.args) != 1:
            await update.message.reply_text("Использование: /remove_admin <chat_id>")
            return
        remove_admin_chat_id = int(context.args[0])
        result = await sync_to_async(remove_admin_user)(remove_admin_chat_id)
        if result:
            await update.message.reply_text(f"Пользователь {remove_admin_chat_id} удален из администраторов.")
        else:
            await update.message.reply_text(f"Пользователь {remove_admin_chat_id} не является администратором.")
    else:
        await update.message.reply_text("Доступ запрещен. Вы не являетесь администратором.")

# Функция для отправки уведомлений администраторам
async def send_notification(notification):
    chat_ids = await sync_to_async(get_admin_chat_ids)()
    message = notification.get('content')
    for chat_id in chat_ids:
        try:
            await bot.send_message(chat_id=chat_id, text=message, parse_mode='Markdown')
        except Exception as e:
            logger.error(f"Error sending message to chat_id {chat_id}: {e}")

# Обработка очереди уведомлений
async def process_notification_queue():
    while True:
        try:
            _, notification_json = redis_client.brpop('telegram_notifications')
            notification = json.loads(notification_json)
            await send_notification(notification)
        except Exception as e:
            logger.error(f"Error processing notification: {e}")
        await asyncio.sleep(1)

# Основная функция
async def main():
    application = ApplicationBuilder().token(settings.TELEGRAM_BOT_TOKEN).build()

    # Инициализируем приложение
    await application.initialize()

    # Обработчики команд
    application.add_handler(CommandHandler('start', start))
    application.add_handler(CommandHandler('add_admin', add_admin))
    application.add_handler(CommandHandler('remove_admin', remove_admin))

    # Обработчики колбэков
    application.add_handler(CallbackQueryHandler(button_callback))
    application.add_handler(CallbackQueryHandler(process_item, pattern='^process_'))

    # Запускаем приложение и обработку очереди уведомлений
    await asyncio.gather(
        application.start(),
        process_notification_queue()
    )

    # Ожидаем завершения
    await application.stop()
    await application.shutdown()

if __name__ == '__main__':
    asyncio.run(main())