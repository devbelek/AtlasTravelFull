import asyncio
import json
import logging
from telegram import Bot, Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import (
    ApplicationBuilder, CommandHandler, CallbackQueryHandler, ContextTypes,
    MessageHandler, filters, Application
)
from django.conf import settings
from telegram_bot.utils import (
    get_all_unprocessed_inquiries, get_all_unprocessed_reviews,
    mark_inquiry_as_processed, mark_review_as_processed,
    get_unprocessed_about_us_inquiries, mark_about_us_inquiry_as_processed,
    get_statistics, get_all_chat_ids_for_notification,
    add_admin_user, remove_admin_user
)
from asgiref.sync import sync_to_async
import redis.asyncio as redis

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

logger = logging.getLogger(__name__)
bot = Bot(token=settings.TELEGRAM_BOT_TOKEN)

# Функция /start
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    logger.info(f"Команда /start от пользователя {update.effective_user.id}")
    keyboard = [
        [InlineKeyboardButton("Новые запросы", callback_data='new_inquiries')],
        [InlineKeyboardButton("Новые отзывы", callback_data='new_reviews')],
        [InlineKeyboardButton("Запросы 'О нас'", callback_data='about_us_inquiries')],
        [InlineKeyboardButton("Статистика", callback_data='statistics')]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        "Добро пожаловать! Выберите действие:",
        reply_markup=reply_markup
    )

# Обработка нажатий кнопок
async def button_callback(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()

    logger.info(f"Обработка кнопки с данными: {query.data}")

    if query.data == 'new_inquiries':
        await new_inquiries(update, context)
    elif query.data == 'new_reviews':
        await new_reviews(update, context)
    elif query.data == 'about_us_inquiries':
        await about_us_inquiries(update, context)
    elif query.data == 'statistics':
        await show_statistics(update, context)

# Функции обработки запросов
async def new_inquiries(update: Update, context: ContextTypes.DEFAULT_TYPE):
    logger.info("Получение новых запросов")
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

async def new_reviews(update: Update, context: ContextTypes.DEFAULT_TYPE):
    logger.info("Получение новых отзывов")
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

async def about_us_inquiries(update: Update, context: ContextTypes.DEFAULT_TYPE):
    logger.info("Получение запросов 'О нас'")
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

async def process_item(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()

    data = query.data.split('_')
    action = data[1]
    item_id = int(data[2])
    model_name = data[3] if len(data) > 3 else None

    logger.info(f"Обработка элемента: действие={action}, id={item_id}, модель={model_name}")

    if action == 'inquiry':
        await sync_to_async(mark_inquiry_as_processed)(item_id, model_name)
        await query.edit_message_text(text="Запрос отмечен как обработанный.")
    elif action == 'review':
        await sync_to_async(mark_review_as_processed)(item_id, model_name)
        await query.edit_message_text(text="Отзыв отмечен как обработанный.")
    elif action == 'about':
        await sync_to_async(mark_about_us_inquiry_as_processed)(item_id)
        await query.edit_message_text(text="Запрос 'О нас' отмечен как обработанный.")

async def show_statistics(update: Update, context: ContextTypes.DEFAULT_TYPE):
    logger.info("Отправка статистики")
    stats = await sync_to_async(get_statistics)()
    message = "Статистика:\n\n"
    for key, value in stats.items():
        message += f"{key}: {value}\n"
    await context.bot.send_message(chat_id=update.effective_chat.id, text=message)

async def send_notification(notification):
    notification_type = notification.get('type')
    chat_ids = await sync_to_async(get_all_chat_ids_for_notification)(notification_type)
    message = notification.get('content')
    logger.info(f"Отправка уведомления: {notification}")
    for chat_id in chat_ids:
        try:
            await bot.send_message(chat_id=chat_id, text=message, parse_mode='Markdown')
        except Exception as e:
            logger.error(f"Ошибка при отправке сообщения на chat_id {chat_id}: {e}")

async def process_notification_queue():
    logger.info("Запуск process_notification_queue")
    redis_client = redis.Redis.from_url(settings.REDIS_URL)
    while True:
        try:
            notification_json = await redis_client.lpop('telegram_notifications')
            if notification_json:
                notification = json.loads(notification_json)
                await send_notification(notification)
            else:
                await asyncio.sleep(1)
        except Exception as e:
            logger.error(f"Ошибка при обработке уведомления: {e}")
            await asyncio.sleep(1)

async def add_admin(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if update.message.chat.type != 'private':
        await update.message.reply_text("Эта команда доступна только в личных сообщениях.")
        return

    chat_id = update.effective_chat.id
    result = await sync_to_async(add_admin_user)(chat_id)

    if result:
        await update.message.reply_text("Вы успешно добавлены как администратор.")
    else:
        await update.message.reply_text("Вы уже являетесь администратором.")

async def remove_admin(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if update.message.chat.type != 'private':
        await update.message.reply_text("Эта команда доступна только в личных сообщениях.")
        return

    chat_id = update.effective_chat.id
    result = await sync_to_async(remove_admin_user)(chat_id)

    if result:
        await update.message.reply_text("Вы успешно удалены из списка администраторов.")
    else:
        await update.message.reply_text("Вы не являетесь администратором.")

# Обработчик текстовых сообщений
async def handle_text_messages(update: Update, context: ContextTypes.DEFAULT_TYPE):
    logger.info(f"Получено текстовое сообщение от {update.effective_user.id}: {update.message.text}")
    await update.message.reply_text("Команда не распознана. Пожалуйста, используйте меню или команды бота.")

async def main():
    application = ApplicationBuilder().token(settings.TELEGRAM_BOT_TOKEN).build()

    # Добавляем обработчики
    application.add_handler(CommandHandler('start', start))
    application.add_handler(CommandHandler('add_admin', add_admin))
    application.add_handler(CommandHandler('remove_admin', remove_admin))
    application.add_handler(CallbackQueryHandler(button_callback, pattern='^(new_inquiries|new_reviews|about_us_inquiries|statistics)$'))
    application.add_handler(CallbackQueryHandler(process_item, pattern='^process_'))
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_text_messages))

    # Удаляем вебхук, если он был установлен
    await application.bot.delete_webhook(drop_pending_updates=True)
    logger.info("Вебхук удален, бот переключен в режим polling.")

    # Запускаем обработку уведомлений в фоне
    asyncio.create_task(process_notification_queue())
    logger.info("Фоновая задача process_notification_queue() запущена.")

    # Запускаем бота
    await application.run_polling()

if __name__ == '__main__':
    asyncio.run(main())