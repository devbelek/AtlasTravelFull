...import axios from "axios";
import { axiosGetCity } from "./cities";

export const axiosGetHome = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}home/`);
    const data = response.data.rest_ideas;

    const rest_ideas = [];

    if (data.tours && Array.isArray(data.tours)) {
      const cityIds = data.tours.map((tour: any) => tour.to_city);

      const citiesData = await Promise.all(
        cityIds.map(async (id: string) => await axiosGetCity(id))
      );

      const toursWithLink = data.tours.map((tour: any, index: number) => ({
        ...tour,
        linkTo: "tours",
        cityInfo: citiesData[index],
      }));
      rest_ideas.push(...toursWithLink);
    }

    if (data.flights && Array.isArray(data.flights)) {
      const flightsWithLink = await Promise.all(
        data.flights.map(async (flight: any) => {
          const cityData = await axiosGetCity(flight.to_city);
          return {
            ...flight,
            linkTo: "flights",
            cityInfo: cityData,
          };
        })
      );
      rest_ideas.push(...flightsWithLink);
    }

    if (data.hotels && Array.isArray(data.hotels)) {
      const hotelsWithLink = await Promise.all(
        data.hotels.map(async (hotel: any) => {
          const cityData = await axiosGetCity(hotel.city);
          return {
            ...hotel,
            linkTo: "hotels",
            cityInfo: cityData,
          };
        })
      );
      rest_ideas.push(...hotelsWithLink);
    }

    if (data.transfers && Array.isArray(data.transfers)) {
      const transfersWithLink = await Promise.all(
        data.transfers.map(async (transfer: any) => {
          const cityData = await axiosGetCity(transfer.city);
          return {
            ...transfer,
            linkTo: "car-rental",
            cityInfo: cityData,
          };
        })
      );
      rest_ideas.push(...transfersWithLink);
    }

    return { ...data, rest_ideas };
  } catch (error) {
    console.error("Ошибка при загрузке home:", error);
    return [];
  }
};

export const axiosGetBestOffers = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}home/`);
    const data = response.data.best_choices;

    const best_choices = [];

    if (data.tours && Array.isArray(data.tours)) {
      const cityIds = data.tours.map((tour: any) => tour.to_city);
      const citiesData = await Promise.all(
        cityIds.map(async (id: string) => await axiosGetCity(id))
      );

      const toursWithLink = data.tours.map((tour: any, index: number) => ({
        ...tour,
        linkTo: "tours",
        cityInfo: citiesData[index], 
      }));
      best_choices.push(...toursWithLink);
    }

    if (data.flights && Array.isArray(data.flights)) {
      const flightsWithLink = await Promise.all(
        data.flights.map(async (flight: any) => {
          const cityData = await axiosGetCity(flight.to_city); 
          return {
            ...flight,
            linkTo: "flights",
            cityInfo: cityData, 
          };
        })
      );
      best_choices.push(...flightsWithLink);
    }

  
    if (data.hotels && Array.isArray(data.hotels)) {
      const hotelsWithLink = await Promise.all(
        data.hotels.map(async (hotel: any) => {
          const cityData = await axiosGetCity(hotel.city); 
          return {
            ...hotel,
            linkTo: "hotels",
            cityInfo: cityData, 
          };
        })
      );
      best_choices.push(...hotelsWithLink);
    }

    if (data.transfers && Array.isArray(data.transfers)) {
      const transfersWithLink = await Promise.all(
        data.transfers.map(async (transfer: any) => {
          const cityData = await axiosGetCity(transfer.city); 
          return {
            ...transfer,
            linkTo: "car-rental",
            cityInfo: cityData, 
          };
        })
      );
      best_choices.push(...transfersWithLink);
    }


return { ...data, best_choices };
  } catch (error) {
    console.error("Ошибка при загрузке best offers:", error);
    return [];
  }
};

export const axiosGetPopularHotels = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}home/`);
    const data = response.data.popular_hotels;

    const popular_hotels = [];

    if (data.hotels && Array.isArray(data.hotels)) {
      const cityIds = data.hotels.map((hotel: any) => hotel.city);
      const citiesData = await Promise.all(
        cityIds.map(async (id: string) => await axiosGetCity(id))
      );

      const hotelsWithLink = data.hotels.map((hotel: any, index: number) => ({
        ...hotel,
        linkTo: "hotels",
        cityInfo: citiesData[index],
      }));
      popular_hotels.push(...hotelsWithLink);
    }

    return { ...data, popular_hotels };
  } catch (error) {
    console.error("Ошибка при загрузке popular hotels:", error);
    return [];
  }
};