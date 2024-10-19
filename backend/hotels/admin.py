from django import forms
from django.conf import settings
from django.contrib import admin
from django.contrib.admin import ModelAdmin, TabularInline
from ckeditor.widgets import CKEditorWidget
from .models import Hotel, HotelImage, HotelComments, HotelInquiry, IconsAfterName
from PIL import Image
from io import BytesIO
from django.core.files import File
import os

from django.utils.translation import gettext_lazy as _

from main.models import BestChoice, RestIdea


class HotelAdminForm(forms.ModelForm):
    class Meta:
        model = Hotel
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super(HotelAdminForm, self).__init__(*args, **kwargs)
        for lang_code, lang_name in settings.LANGUAGES:
            description_field = 'description_%s' % lang_code
            if description_field in self.fields:
                self.fields[description_field].widget = CKEditorWidget(config_name='default')
            title_field = 'title_%s' % lang_code
            if title_field in self.fields:
                self.fields[title_field].widget = forms.TextInput()


class HotelImageInline(TabularInline):
    model = HotelImage
    extra = 1


@admin.register(Hotel)
class HotelAdmin(admin.ModelAdmin):
    form = HotelAdminForm
    inlines = [HotelImageInline]
    list_display = ['title', 'city', 'get_final_rating', 'rating_count', 'is_popular_hotel', 'is_best_choice', 'is_rest_idea']
    list_editable = ['is_popular_hotel', 'is_best_choice', 'is_rest_idea']
    readonly_fields = ['average_rating', 'rating_count']

    fieldsets = (
        ('Основная информация', {
            'fields': ('city', 'arrival_date', 'departure_date', 'nights', 'tags', 'is_popular_hotel', 'is_best_choice', 'is_rest_idea')
        }),
        ('Рейтинг', {
            'fields': ('manual_rating', 'average_rating', 'rating_count')
        }),
        ('Русский', {
            'fields': ('title_ru', 'description_ru'),
        }),
        ('Кыргызский', {
            'fields': ('title_ky', 'description_ky'),
        }),
        ('Английский', {
            'fields': ('title_en', 'description_en'),
        }),
    )

    def save_model(self, request, obj, form, change):
        super().save_model(request, obj, form, change)
        obj.update_rating()
        self._update_special_lists(obj)

    def _update_special_lists(self, hotel):
        best_choice, _ = BestChoice.objects.get_or_create(id=1)
        if hotel.is_best_choice:
            best_choice.hotels.add(hotel)
        else:
            best_choice.hotels.remove(hotel)

        rest_idea, _ = RestIdea.objects.get_or_create(id=1)
        if hotel.is_rest_idea:
            rest_idea.hotels.add(hotel)
        else:
            rest_idea.hotels.remove(hotel)

    def get_final_rating(self, obj):
        return obj.get_final_rating()

    get_final_rating.short_description = 'Рейтинг'


@admin.register(HotelComments)
class HotelCommentsAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'hotel', 'rate', 'date', 'is_approved']
    list_filter = ['is_approved', 'date', 'rate']
    actions = ['approve_comments']

    def approve_comments(self, request, queryset):
        queryset.update(is_approved=True)
        for comment in queryset:
            if comment.hotel:
                comment.hotel.update_rating()

    approve_comments.short_description = "Одобрить выбранные отзывы"


@admin.register(HotelInquiry)
class HotelInquiryAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone_number', 'email', 'hotel', 'created_at', 'is_processed']
    list_filter = ['created_at', 'hotel']
    search_fields = ['name', 'phone_number', 'email']
    readonly_fields = ['created_at']
    list_editable = ['is_processed']
    actions = ['mark_as_processed']

    def mark_as_processed(self, request, queryset):
        queryset.update(is_processed=True)
        self.message_user(request, _('Выбранные запросы отмечены как обработанные.'))

    mark_as_processed.short_description = _('Отметить как обработанное')


@admin.register(IconsAfterName)
class IconsAfterNameAdmin(admin.ModelAdmin):
    list_display = ['icon_city_country', 'icon_location']
