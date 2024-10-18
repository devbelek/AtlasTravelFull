from django.core.management.base import BaseCommand
import asyncio
from telegram_bot.bot import main
import logging

logger = logging.getLogger(__name__)


class Command(BaseCommand):
    help = 'Starts the Telegram bot'

    def handle(self, *args, **options):
        loop = asyncio.get_event_loop()
        if loop.is_running():
            # Если событийный цикл уже запущен, создаем новую задачу
            loop.create_task(main())
            self.stdout.write(self.style.SUCCESS('Telegram bot is running in existing event loop.'))
            logger.info("Telegram bot is running in existing event loop.")
        else:
            # Если событийный цикл не запущен, запускаем его
            try:
                loop.run_until_complete(main())
                self.stdout.write(self.style.SUCCESS('Telegram bot has been started.'))
                logger.info("Telegram bot has been started.")
            except Exception as e:
                self.stdout.write(self.style.ERROR(f'Error starting Telegram bot: {e}'))
                logger.error(f"Error starting Telegram bot: {e}")