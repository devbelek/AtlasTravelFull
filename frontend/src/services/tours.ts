import axios from "axios";
import { axiosGetCity } from "./cities";

export const axiosGetTours = async (content: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}${content}/`);
    const data = response.data.results;

    const projectsWithCityInfo = await Promise.all(
      data.map(async (item: any) => {
        const cityData =
          content === "tours" || content === "flights"
            ? await axiosGetCity(item.to_city)
            : await axiosGetCity(item.city);

        return {
          ...item,
          cityInfo: cityData,
        };
      })
    );

    return projectsWithCityInfo;
  } catch (error) {
    console.error("Ошибка при загрузке", content, error);
    return [];
  }
};

export const axiosGetToursDetails = async (content: string, id: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}` + content + "/" + id);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке ", content, error);
    return [];
  }
};

export const axiosGetToursSimilar = async (content: string, id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${content}/${id}/similar/`
    );
    const data = response.data;

    const projectsWithCityInfo = await Promise.all(
      data.map(async (item: any) => {
        const cityData =
          content === "tours" || content === "flights"
            ? await axiosGetCity(item.to_city)
            : await axiosGetCity(item.city);

        return {
          ...item,
          cityInfo: cityData,
        };
      })
    );

    return projectsWithCityInfo;
  } catch (error) {
    console.error("Ошибка при загрузке похожих туров", content, error);
    return [];
  }
};
