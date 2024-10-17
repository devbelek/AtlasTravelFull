from django.db import models


class TelegramUser(models.Model):
    chat_id = models.BigIntegerField(unique=True, verbose_name="Telegram Chat ID")
    username = models.CharField(max_length=255, null=True, blank=True, verbose_name="Username")
    first_name = models.CharField(max_length=255, null=True, blank=True, verbose_name="First Name")
    last_name = models.CharField(max_length=255, null=True, blank=True, verbose_name="Last Name")
    is_admin = models.BooleanField(default=False, verbose_name="Is Admin")
    receive_notifications = models.BooleanField(default=True, verbose_name="Receive Notifications")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created At")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated At")

    def __str__(self):
        return f"{self.username or self.chat_id} (Admin: {self.is_admin})"

    class Meta:
        verbose_name = 'Telegram User'
        verbose_name_plural = 'Telegram Users'
