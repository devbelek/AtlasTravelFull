import axios from "axios";
import { API_BASE_URL } from "@/constants/default_api";


export const axiosGetCity = async (id: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}cities/` + id);
      const data = response.data;
      return data;
    } catch (error) {
      console.error("Ошибка при загрузке city:", error);
      return [];
    }
  };

  export const axiosGetCities = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}cities/`);
      const data = response.data;
      return data;
    } catch (error) {
      console.error("Ошибка при загрузке cities:", error);
      return [];
    }
  };