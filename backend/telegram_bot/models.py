from django.db import models


class TelegramUser(models.Model):
    chat_id = models.BigIntegerField(unique=True, verbose_name="Телеграм ID")
    is_admin = models.BooleanField(default=False, verbose_name="Является администратором")
    receive_inquiries = models.BooleanField(default=True, verbose_name="Получать запросы")
    receive_reviews = models.BooleanField(default=True, verbose_name="Получать отзывы")
    receive_about_us_inquiries = models.BooleanField(default=True, verbose_name="Получать запросы 'О нас'")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self):
        return f"Телеграм ID: {self.chat_id} (Администратор: {self.is_admin})"

    class Meta:
        verbose_name = 'Пользователь Телеграм'
        verbose_name_plural = 'Пользователи Телеграм'