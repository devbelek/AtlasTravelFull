from rest_framework import serializers
from .models import RestIdea, BestChoice, PopularHotel, RentOfCar, RentOfCarImage, RentOfCarDescription, Benefits, \
    MainComments
from tours.serializers import TourSerializer
from hotels.serializers import HotelSerializer
from flights.serializers import FlightSerializer
from transfer.serializers import TransferSerializer


class RestIdeaSerializer(serializers.ModelSerializer):
    tours = TourSerializer(many=True, read_only=True)
    hotels = HotelSerializer(many=True, read_only=True)
    flights = FlightSerializer(many=True, read_only=True)
    transfers = TransferSerializer(many=True, read_only=True)

    class Meta:
        model = RestIdea
        exclude = ['id']


class BestChoiceSerializer(serializers.ModelSerializer):
    tours = TourSerializer(many=True, read_only=True)
    hotels = HotelSerializer(many=True, read_only=True)
    flights = FlightSerializer(many=True, read_only=True)
    transfers = TransferSerializer(many=True, read_only=True)

    class Meta:
        model = BestChoice
        exclude = ['id']


class PopularHotelSerializer(serializers.ModelSerializer):
    hotels = HotelSerializer(many=True, read_only=True)

    class Meta:
        model = PopularHotel
        exclude = ['id']


class RentOfCarImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = RentOfCarImage
        fields = ['id', 'image', 'order']


class RentOfCarDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = RentOfCarDescription
        fields = ['id', 'description', 'order']


class RentOfCarSerializer(serializers.ModelSerializer):
    images = RentOfCarImageSerializer(many=True, read_only=True)
    descriptions = RentOfCarDescriptionSerializer(many=True, read_only=True)

    class Meta:
        model = RentOfCar
        fields = ['id', 'title', 'images', 'descriptions']


class BenefitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Benefits
        fields = '__all__'


class MainCommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainComments
        fields = '__all__'
