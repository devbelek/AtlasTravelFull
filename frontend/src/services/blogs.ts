import axios from "axios";

export const axiosGetBlogs = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}blog-posts/`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке blog-posts:", error);
    return [];
  }
};

export const axiosGetBlogsDetails = async (index: string) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}blog-posts/${index}`);
      const data = response.data;
      return data;
    } catch (error) {
      console.error("Ошибка при загрузке blog-posts:", error);
      return [];
    }
  };
