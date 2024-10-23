import axios from "axios";
import { API_BASE_URL } from "@/constants/default_api";

export const axiosGetBenefits = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}benefits/`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке benefits:", error);
    return [];
  }
};
