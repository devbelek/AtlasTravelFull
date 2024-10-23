import axios from "axios";
import { API_BASE_URL } from "@/constants/default_api";
import { axiosGetCity } from "./cities";

export const axiosGetAboutUs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}about-us/`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке about-us:", error);
    return [];
  }
};

export const axiosGetAboutUsImages = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}about-us-images/`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке about-us-images:", error);
    return [];
  }
};

export const axiosGetOurProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}our-projects/`);
    const data = response.data[0];

    const projects: any[] = [];

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
      projects.push(...toursWithLink);
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
      projects.push(...flightsWithLink);
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
      projects.push(...hotelsWithLink);
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
      projects.push(...transfersWithLink);
    }

    return { ...data, projects };
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    return [];
  }
};

export const axiosGetFaqs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}faqs/`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке faqs:", error);
    return [];
  }
};
