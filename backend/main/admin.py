from django.contrib import admin
from django.utils.html import format_html
from modeltranslation.admin import TranslationAdmin
from adminsortable2.admin import SortableAdminMixin

from .models import RestIdea, BestChoice, PopularHotel, RentOfCar, RentOfCarDescription, Benefits, RentOfCarImage, \
    MainComments


@admin.register(RestIdea)
class RestIdeaAdmin(admin.ModelAdmin):
    list_display = ['get_tours', 'get_hotels', 'get_flights', 'get_transfers']
    filter_horizontal = ('tours', 'hotels', 'flights', 'transfers')

    def get_tours(self, obj):
        return ", ".join([f"{tour.title_ru} ({tour.start_tour} - {tour.end_tour})" for tour in obj.tours.all()])

    def get_hotels(self, obj):
        return ", ".join([f"{hotel.title_ru} ({hotel.city})" for hotel in obj.hotels.all()])

    def get_flights(self, obj):
        return ", ".join([f"{flight.title} ({flight.from_city} -> {flight.to_city})" for flight in obj.flights.all()])

    def get_transfers(self, obj):
        return ", ".join([f"{transfer.title} ({transfer.city})" for transfer in obj.transfers.all()])

    get_tours.short_description = 'Туры'
    get_hotels.short_description = 'Отели'
    get_flights.short_description = 'Авиарейсы'
    get_transfers.short_description = 'Трансферы'


@admin.register(BestChoice)
class BestChoiceAdmin(admin.ModelAdmin):
    list_display = ['get_tours', 'get_hotels', 'get_flights', 'get_transfers']
    filter_horizontal = ('tours', 'hotels', 'flights', 'transfers')

    def get_tours(self, obj):
        return ", ".join([f"{tour.title_ru} ({tour.start_tour} - {tour.end_tour})" for tour in obj.tours.all()])

    def get_hotels(self, obj):
        return ", ".join([f"{hotel.title_ru} ({hotel.city})" for hotel in obj.hotels.all()])

    def get_flights(self, obj):
        return ", ".join([f"{flight.title} ({flight.from_city} -> {flight.to_city})" for flight in obj.flights.all()])

    def get_transfers(self, obj):
        return ", ".join([f"{transfer.title} ({transfer.city})" for transfer in obj.transfers.all()])

    get_tours.short_description = 'Туры'
    get_hotels.short_description = 'Отели'
    get_flights.short_description = 'Авиарейсы'
    get_transfers.short_description = 'Трансферы'


@admin.register(PopularHotel)
class PopularHotelAdmin(admin.ModelAdmin):
    list_display = ['get_hotels']
    filter_horizontal = ('hotels',)

    def get_hotels(self, obj):
        return ", ".join([f"{hotel.title_ru} ({hotel.description_ru} - {hotel.city})" for hotel in obj.hotels.all()])

    get_hotels.short_description = 'Отели'

    def has_add_permission(self, request):
        return False


class RentOfCarImageInline(admin.TabularInline):
    model = RentOfCarImage
    extra = 1
    fields = ('image', 'order', 'image_tag')
    readonly_fields = ('image_tag',)


class RentOfCarDescriptionInline(admin.TabularInline):
    model = RentOfCarDescription
    extra = 1
    fields = ('description_ky', 'description_ru', 'description_en', 'order')


@admin.register(RentOfCar)
class RentOfCarAdmin(admin.ModelAdmin):
    list_display = ['title_ru']
    inlines = [RentOfCarImageInline, RentOfCarDescriptionInline]
    fieldsets = (
        ('Кыргызский', {
            'fields': ('title_ky',),
        }),
        ('Русский', {
            'fields': ('title_ru',),
        }),
        ('Английский', {
            'fields': ('title_en',),
        }),
    )


@admin.register(Benefits)
class BenefitsAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ('icon_preview', 'title_ru', 'icon')
    list_display_links = ('title_ru',)
    readonly_fields = ('icon_preview',)
    fieldsets = (
        ('Общее', {
            'fields': ('icon', 'icon_preview'),
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

    class Media:
        js = (
            'admin/js/vendor/jquery/jquery.js',
            'admin/js/jquery.init.js',
            'admin/js/jquery-ui/jquery-ui.min.js',
            'adminsortable2/js/jquery.ui.touch-punch.js',
            'adminsortable2/js/sortable.admin_atlas.js',
            'main/js/csrf.js',  # Путь к вашему файлу csrf.js
        )


@admin.register(MainComments)
class MainCommentsAdmin(admin.ModelAdmin):
    list_display = ['id', 'full_name', 'rates', 'short_comment', 'image_tag']
    list_filter = ['rates']
    search_fields = ['full_name', 'comment']
    readonly_fields = ['image_tag']

    fieldsets = (
        (None, {
            'fields': ('full_name', 'comment', 'rates', 'image'),
        }),
    )

    def short_comment(self, obj):
        return obj.comment[:50] + '...' if len(obj.comment) > 50 else obj.comment

    short_comment.short_description = 'Отзыв'

    def image_tag(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="50" height="50" />'.format(obj.image.url))
        return None

    image_tag.short_description = 'Фото'
