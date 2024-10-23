import axios from "axios";
import { API_BASE_URL } from "@/constants/default_api";

export const axiosGetComments = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}comments/`);
    const data = response.data;

    const approvedComments = data.filter((comment: { is_approved: boolean }) => comment.is_approved);
    
    return approvedComments;
  } catch (error) {
    console.error("Ошибка при загрузке comments:", error);
    return [];
  }
};
