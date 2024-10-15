from django.core.exceptions import ValidationError
from django.db import models
from django.utils.html import format_html
from ckeditor.fields import RichTextField
from tours.models import Tour
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import sys
from telegram_bot.utils import send_about_us_notification


def validate_file_size(value):
    filesize = value.size
    if filesize > 30 * 1024 * 1024:  # 10MB
        raise ValidationError("Максимальный размер файла 30MB")


def compress_image(image, max_size=(1200, 1200), quality=85):
    if image.size > (1 * 1024 * 1024):
        im = Image.open(image)
        output = BytesIO()
        im.thumbnail(max_size)
        im.save(output, format='JPEG', quality=quality, optimize=True)
        output.seek(0)

        return InMemoryUploadedFile(output, 'ImageField', f"{image.name.split('.')[0]}.jpg",
                                    'image/jpeg', sys.getsizeof(output), None)
    return image


class AboutUs(models.Model):
    title = models.CharField(max_length=200, verbose_name='О нас', default='О нас')
    description = RichTextField(verbose_name='Описание')
    youtube_video_url = models.URLField(verbose_name="URL видео с YouTube")

    def __str__(self):
        return f'{self.title}'

    class Meta:
        verbose_name = 'О нас'
        verbose_name_plural = 'О нас'


class AboutUsImage(models.Model):
    about_us = models.ForeignKey(AboutUs, on_delete=models.CASCADE, related_name='images', null=True, blank=True)
    image = models.ImageField(upload_to='about_images/', verbose_name="Изображение", validators=[validate_file_size])
    order = models.PositiveIntegerField(default=0, verbose_name="Порядок отображения")

    class Meta:
        verbose_name = "Изображение для 'О нас'"
        verbose_name_plural = "Изображения для 'О нас'"
        ordering = ['order']

    def save(self, *args, **kwargs):
        if self.image:
            self.image = compress_image(self.image)
        super().save(*args, **kwargs)

    def image_tag(self):
        if self.image:
            return format_html('<img src="{}" width="100" height="auto" />', self.image.url)
        return "-"

    image_tag.short_description = 'Превью'


class FAQ(models.Model):
    question = models.CharField(max_length=255, verbose_name='Вопрос')
    answer = models.TextField(verbose_name='Ответ', blank=False)

    class Meta:
        verbose_name = "Вопрос-Ответ"
        verbose_name_plural = "Вопросы-Ответы"

    def __str__(self):
        return self.question


class AboutUsInquiry(models.Model):
    phone_number = models.CharField(max_length=20, verbose_name="Номер телефона")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    is_processed = models.BooleanField(default=False, verbose_name="Обработано")

    def __str__(self):
        return f'{self.phone_number}'

    class Meta:
        verbose_name = 'Запрос на консультацию'
        verbose_name_plural = 'Запросы на консультации'

    def save(self, *args, **kwargs):
        if not self.pk:
            send_about_us_notification(self)
        super().save(*args, **kwargs)


class AboutUsConsultant(models.Model):
    surname = models.CharField(max_length=20, verbose_name='Фамилия')
    name = models.CharField(max_length=20, verbose_name='Имя')
    phone_number = models.CharField(max_length=20, verbose_name="Номер телефона")
    whatsapp = models.URLField(verbose_name='whatsapp')
    telegram = models.URLField(verbose_name='telegram')
    instagram = models.URLField(verbose_name='instagram')
    is_active = models.BooleanField(default=False, verbose_name='Активный консультант')

    def __str__(self):
        return f"{self.name} {self.surname}"

    def clean(self):
        if self.is_active:
            if AboutUsConsultant.objects.filter(is_active=True).exclude(id=self.id).exists():
                raise ValidationError("Можно выбрать только одного активного консультанта.")

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = 'Консультант'
        verbose_name_plural = 'Консультанты'


class OurProjects(models.Model):
    title = models.CharField(max_length=200, default="Наши Проекты", verbose_name="Заголовок")
    description = RichTextField(verbose_name="Описание")
    youtube_video_url = models.URLField(verbose_name="URL видео с YouTube")
    tours = models.ManyToManyField(Tour, related_name='our_projects', verbose_name="Связанные туры")

    class Meta:
        verbose_name = "Наши проекты"
        verbose_name_plural = "Наши проекты"

    def __str__(self):
        return self.title

    def clean(self):
        if OurProjects.objects.exists() and not self.pk:
            raise ValidationError("Может быть только одна запись 'Наши проекты'")

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)


class PrivacyPolicy(models.Model):
    title = models.CharField(max_length=50, verbose_name='Заголовок')
    content = RichTextField(verbose_name='Содержание')

    def __str__(self):
        return f'{self.title}'

    class Meta:
        verbose_name = 'Политика конфиденциальности'
        verbose_name_plural = 'Политика конфиденциальности'


class UserAgreement(models.Model):
    title = models.CharField(max_length=50, verbose_name='Заголовок')
    content = RichTextField(verbose_name='Содержание')

    def __str__(self):
        return f'{self.title}'

    class Meta:
        verbose_name = 'Пользовательское соглашение'
        verbose_name_plural = 'Пользовательские соглашения'


class ReturnPolicy(models.Model):
    title = models.CharField(max_length=50, verbose_name='Заголовок')
    content = RichTextField(verbose_name='Содержание')

    def __str__(self):
        return f'{self.title}'

    class Meta:
        verbose_name = 'Условия возврата'
        verbose_name_plural = 'Условия возврата'