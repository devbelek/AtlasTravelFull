import axios from "axios";

export const axiosGetCarRental = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}rent-of-car/`);
    const data = response.data[0];
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке rent-of-car:", error);
    return [];
  }
};
