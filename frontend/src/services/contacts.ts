import axios from "axios";
import { API_BASE_URL } from "@/constants/default_api";

export const axiosGetContacts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}contacts/`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке contacts:", error);
    return [];
  }
};
