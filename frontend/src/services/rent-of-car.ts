import axios from "axios";
import { API_BASE_URL } from "@/constants/default_api";

export const axiosGetCarRental = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}rent-of-car/`);
    const data = response.data[0];
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке rent-of-car:", error);
    return [];
  }
};
