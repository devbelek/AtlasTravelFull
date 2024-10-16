from django.urls import path, include
from rest_framework.routers import DefaultRouter
from main.views import HomePageView, RentOfCarViewSet, BenefitsViewSet, MainCommentsViewSet

router = DefaultRouter()
router.register(r'rent-of-car', RentOfCarViewSet)
router.register(r'benefits', BenefitsViewSet)
router.register(r'comments', MainCommentsViewSet, basename='comments')


urlpatterns = [
    path('home/', HomePageView.as_view(), name='home-page'),
    path('', include(router.urls)),
]