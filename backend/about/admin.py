from adminsortable2.admin import SortableAdminMixin
from django.contrib import admin, messages
from django import forms
from ckeditor.widgets import CKEditorWidget
from django.db import models
from django.utils.html import strip_tags
from modeltranslation.admin import TranslationAdmin, TranslationTabularInline
from .models import (AboutUs, AboutUsImage, FAQ, AboutUsInquiry,
                     AboutUsConsultant, OurProjects, PrivacyPolicy,
                     UserAgreement, ReturnPolicy, ConsultantPhoneNumber)
from django.utils.translation import gettext_lazy as _


@admin.register(AboutUs)
class AboutUsAdmin(admin.ModelAdmin):
    list_display = ('title_ru', 'title_ky', 'title_en', 'youtube_video_url')
    search_fields = ('title_ru', 'title_ky', 'title_en')
    formfield_overrides = {
        models.TextField: {'widget': CKEditorWidget},
    }

    fieldsets = (
        ('Основные', {
            'fields': ('youtube_video_url',),
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


@admin.register(AboutUsImage)
class AboutUsImageAdmin(admin.ModelAdmin):
    list_display = ('id', 'order', 'image_tag')
    list_editable = ('order',)
    ordering = ('order',)

    def save_model(self, request, obj, form, change):
        if not change and AboutUsImage.objects.count() >= 6:
            messages.error(request, "Максимум можно добавить 6 изображений.")
            return
        super().save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if AboutUsImage.objects.count() >= 6:
            return False
        return super().has_add_permission(request)


@admin.register(FAQ)
class FAQAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ('question_ru', 'question_ky', 'question_en')
    # Удаляем 'order' из list_editable
    # list_editable = ('order',)
    list_display_links = ('question_ru',)
    fieldsets = (
        ('Русский', {
            'fields': ('question_ru', 'answer_ru'),
        }),
        ('Кыргызский', {
            'fields': ('question_ky', 'answer_ky'),
        }),
        ('Английский', {
            'fields': ('question_en', 'answer_en'),
        }),
    )

    class Media:
        js = (
            'admin/js/vendor/jquery/jquery.js',
            'admin/js/jquery.init.js',
            'admin/js/jquery-ui/jquery-ui.min.js',
            'adminsortable2/js/jquery.ui.touch-punch.js',
            'adminsortable2/js/sortable.admin_atlas.js',
            'about/js/csrf.js',
        )


@admin.register(AboutUsInquiry)
class AboutUsInquiryAdmin(admin.ModelAdmin):
    list_display = ['phone_number', 'created_at']
    list_filter = ['created_at']
    search_fields = ['phone_number']
    readonly_fields = ['created_at']


class ConsultantPhoneNumberInline(admin.TabularInline):
    model = ConsultantPhoneNumber
    extra = 1


@admin.register(AboutUsConsultant)
class AboutUsConsultantAdmin(admin.ModelAdmin):
    list_display = ('name', 'surname', 'get_phone_numbers', 'is_active')
    list_editable = ('is_active',)
    inlines = [ConsultantPhoneNumberInline]

    def get_phone_numbers(self, obj):
        return ", ".join([phone.phone_number for phone in obj.phone_numbers.all()])
    get_phone_numbers.short_description = 'Номера телефонов'

    def save_model(self, request, obj, form, change):
        if obj.is_active:
            AboutUsConsultant.objects.filter(is_active=True) \
                .exclude(pk=obj.pk).update(is_active=False)
        super().save_model(request, obj, form, change)

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.order_by('-is_active', 'name')


@admin.register(OurProjects)
class OurProjectsAdmin(admin.ModelAdmin):
    list_display = ('title_ru', 'title_ky', 'title_en')
    fieldsets = (
        ('Основные', {
            'fields': ('tours', 'youtube_video_url'),
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
    filter_horizontal = ('tours',)

    def has_add_permission(self, request):
        return not OurProjects.objects.exists()


@admin.register(PrivacyPolicy)
class PrivacyPolicyAdmin(admin.ModelAdmin):
    list_display = ('id', 'content_preview_ru', 'content_preview_ky', 'content_preview_en')
    search_fields = ('content_ru', 'content_ky', 'content_en')

    formfield_overrides = {
        models.TextField: {'widget': CKEditorWidget},
    }

    fieldsets = (
        ('Русский', {
            'fields': ('title_ru', 'content_ru'),
        }),
        ('Кыргызский', {
            'fields': ('title_ky', 'content_ky'),
        }),
        ('Английский', {
            'fields': ('title_en', 'content_en'),
        }),
    )

    def has_add_permission(self, request):
        return not PrivacyPolicy.objects.exists()

    def content_preview_ky(self, obj):
        content = strip_tags(obj.content_ky)
        return (content[:100] + '...') if len(content) > 100 else content

    def content_preview_ru(self, obj):
        content = strip_tags(obj.content_ru)
        return (content[:100] + '...') if len(content) > 100 else content

    def content_preview_en(self, obj):
        content = strip_tags(obj.content_en)
        return (content[:100] + '...') if len(content) > 100 else content

    content_preview_ru.short_description = 'Превью контента (Ру)'
    content_preview_ky.short_description = 'Превью контента (Кыр)'
    content_preview_en.short_description = 'Превью контента (Анг)'


@admin.register(UserAgreement)
class UserAgreementAdmin(admin.ModelAdmin):
    list_display = ('id', 'content_preview_ru', 'content_preview_ky', 'content_preview_en')
    search_fields = ('content_ru', 'content_ky', 'content_en')

    formfield_overrides = {
        models.TextField: {'widget': CKEditorWidget},
    }

    fieldsets = (
        ('Русский', {
            'fields': ('title_ru', 'content_ru'),
        }),
        ('Кыргызский', {
            'fields': ('title_ky', 'content_ky'),
        }),
        ('Английский', {
            'fields': ('title_en', 'content_en'),
        }),
    )

    def has_add_permission(self, request):
        return not UserAgreement.objects.exists()

    def content_preview_ky(self, obj):
        content = strip_tags(obj.content_ky)
        return (content[:100] + '...') if len(content) > 100 else content

    def content_preview_ru(self, obj):
        content = strip_tags(obj.content_ru)
        return (content[:100] + '...') if len(content) > 100 else content

    def content_preview_en(self, obj):
        content = strip_tags(obj.content_en)
        return (content[:100] + '...') if len(content) > 100 else content

    content_preview_ru.short_description = 'Превью контента (Ру)'
    content_preview_ky.short_description = 'Превью контента (Кыр)'
    content_preview_en.short_description = 'Превью контента (Анг)'


@admin.register(ReturnPolicy)
class ReturnPolicyAdmin(admin.ModelAdmin):
    list_display = ('id', 'content_preview_ru', 'content_preview_ky', 'content_preview_en')
    search_fields = ('content_ru', 'content_ky', 'content_en')

    formfield_overrides = {
        models.TextField: {'widget': CKEditorWidget},
    }

    fieldsets = (
        ('Русский', {
            'fields': ('title_ru', 'content_ru'),
        }),
        ('Кыргызский', {
            'fields': ('title_ky', 'content_ky'),
        }),
        ('Английский', {
            'fields': ('title_en', 'content_en'),
        }),
    )

    def has_add_permission(self, request):
        return not ReturnPolicy.objects.exists()

    def content_preview_ky(self, obj):
        content = strip_tags(obj.content_ky)
        return (content[:100] + '...') if len(content) > 100 else content

    def content_preview_ru(self, obj):
        content = strip_tags(obj.content_ru)
        return (content[:100] + '...') if len(content) > 100 else content

    def content_preview_en(self, obj):
        content = strip_tags(obj.content_en)
        return (content[:100] + '...') if len(content) > 100 else content

    content_preview_ru.short_description = 'Превью контента (Ру)'
    content_preview_ky.short_description = 'Превью контента (Кыр)'
    content_preview_en.short_description = 'Превью контента (Анг)'