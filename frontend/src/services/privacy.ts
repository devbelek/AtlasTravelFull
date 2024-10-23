import axios from "axios";
import { API_BASE_URL } from "@/constants/default_api";

export const axiosGetPrivacyPolicy = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}privacy-policy/`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке privacy-policy:", error);
    return [];
  }
};

export const axiosGetReturnPolicy = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}return-policy/`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке return-policy:", error);
    return [];
  }
};

export const axiosGetUserAgreement = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}user-agreement/`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке user-agreement:", error);
    return [];
  }
};
