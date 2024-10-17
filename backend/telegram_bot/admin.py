from django.contrib import admin
from .models import TelegramUser


@admin.register(TelegramUser)
class TelegramUserAdmin(admin.ModelAdmin):
    list_display = (
        'chat_id', 'username', 'is_admin', 'receive_notifications',
        'created_at', 'updated_at'
    )
    list_filter = ('is_admin', 'receive_notifications')
    search_fields = ('chat_id', 'username', 'first_name', 'last_name')