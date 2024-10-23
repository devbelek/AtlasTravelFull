import axios from "axios";

export const axiosGetBenefits = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}benefits/`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке benefits:", error);
    return [];
  }
};