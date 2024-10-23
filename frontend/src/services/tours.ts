import axios from "axios";
import { API_BASE_URL } from "@/constants/default_api";
import { axiosGetCity } from "./cities";

// export const axiosGetTours = async (content: string) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}` + content + "/");
//     const data = response.data;
//     console.log
//     return data;
//   } catch (error) {
//     console.error("Ошибка при загрузке ", content, error);
//     return [];
//   }
// };

export const axiosGetTours = async (content: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}${content}/`);
      const data = response.data.results;
  
      const projectsWithCityInfo = await Promise.all(
        data.map(async (item: any) => {
          const cityData =
            content === "tours" || content === "hotels"
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
    const response = await axios.get(`${API_BASE_URL}` + content + "/" + id);
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
      `${API_BASE_URL}` + content + "/" + id + "/" + "similar"
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке ", content, error);
    return [];
  }
};
