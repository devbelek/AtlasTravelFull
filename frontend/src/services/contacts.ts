import axios from "axios";

export const axiosGetContacts = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}contacts/`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке contacts:", error);
    return [];
  }
};