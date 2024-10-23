import axios from "axios";

export const axiosGetComments = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}comments/`);
    const data = response.data;

    const approvedComments = data.filter((comment: { is_approved: boolean }) => comment.is_approved);

    return approvedComments;
  } catch (error) {
    console.error("Ошибка при загрузке comments:", error);
    return [];
  }
};