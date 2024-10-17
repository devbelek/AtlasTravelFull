from django.contrib import admin
from .models import TelegramUser


@admin.register(TelegramUser)
class TelegramUserAdmin(admin.ModelAdmin):
    list_display = (
        'chat_id', 'is_admin', 'receive_inquiries',
        'receive_reviews', 'receive_about_us_inquiries',
        'created_at', 'updated_at'
    )
    list_filter = ('is_admin', 'receive_inquiries', 'receive_reviews', 'receive_about_us_inquiries')
    search_fields = ('chat_id',)
