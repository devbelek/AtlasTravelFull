from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactsViewSet

router = DefaultRouter()
router.register(r'contacts', ContactsViewSet, basename='contacts')

urlpatterns = [
    path('', include(router.urls)),
]
