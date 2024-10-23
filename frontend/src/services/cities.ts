import axios from "axios";

export const axiosGetCity = async (id: string) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}cities/` + id);
      const data = response.data;
      return data;
    } catch (error) {
      console.error("Ошибка при загрузке city:", error);
      return [];
    }
  };

  export const axiosGetCities = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}cities/`);
      const data = response.data;
      return data;
    } catch (error) {
      console.error("Ошибка при загрузке cities:", error);
      return [];
    }
  };