from modeltranslation.translator import register, TranslationOptions
from .models import RentOfCar, RentOfCarDescription, Benefits, MainComments


@register(RentOfCar)
class RentOfCarTranslationOptions(TranslationOptions):
    fields = ('title',)


@register(RentOfCarDescription)
class RentOfCarDescriptionTranslationOptions(TranslationOptions):
    fields = ('description',)


@register(Benefits)
class BenefitsTranslationOptions(TranslationOptions):
    fields = ('title', 'description')


@register(MainComments)
class MainCommentsTranslationOptions(TranslationOptions):
    fields = ('full_name', 'comment')