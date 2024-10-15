from django.urls import path, include
from rest_framework.routers import DefaultRouter
from tours.views import IconsAfterNameViewSet
from .views import FlightViewSet

router = DefaultRouter()
router.register(r'flights', FlightViewSet, basename='flights')
router.register(r'icons-after-name', IconsAfterNameViewSet, basename='icons-after-name')

urlpatterns = [
    path('', include(router.urls)),
    path('flights/<int:pk>/add_comment/', FlightViewSet.as_view({'post': 'add_comment'}), name='flights-add-comment'),
    path('flights/<int:pk>/add_inquiry/', FlightViewSet.as_view({'post': 'add_inquiry'}), name='flights-add-inquiry'),
    path('flights/<int:pk>/similar/', FlightViewSet.as_view({'get': 'similar'}), name='flights-similar'),
]