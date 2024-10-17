from django.db import models


class TelegramUser(models.Model):
    chat_id = models.BigIntegerField(unique=True, verbose_name="Telegram Chat ID")
    is_admin = models.BooleanField(default=False, verbose_name="Is Admin")
    receive_inquiries = models.BooleanField(default=True, verbose_name="Receive Inquiries")
    receive_reviews = models.BooleanField(default=True, verbose_name="Receive Reviews")
    receive_about_us_inquiries = models.BooleanField(default=True, verbose_name="Receive 'About Us' Inquiries")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created At")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated At")

    def __str__(self):
        return f"Chat ID: {self.chat_id} (Admin: {self.is_admin})"

    class Meta:
        verbose_name = 'Пользователь Телеграм'
        verbose_name_plural = 'Пользователи Телеграм'