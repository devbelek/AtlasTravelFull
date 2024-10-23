import axios from "axios";

export interface Consultant {
  id: number;
  name: string;
  surname: string;
  phone_number: string;
  whatsapp: string;
  telegram: string;
  instagram: string;
  is_active: boolean;
}

export const axiosGetConsultant = async (): Promise<Consultant | null> => {
  try {
    const response = await axios.get<Consultant[]>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}consultants/`
    );

    const activeConsultant = response.data.find(
      (consultant) => consultant.is_active
    );

    return activeConsultant || null;
  } catch (error) {
    console.error("Ошибка при загрузке consultants:", error);
    return null;
  }
};

export const axiosPostNumberConsultant = async (
  phoneNumber: string
): Promise<any> => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}inquiries/`, {
      phone_number: phoneNumber,
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при отправке на inquiries:", error);
    return null;
  }
};
