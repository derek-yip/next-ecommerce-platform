import { Category } from "@/types";
import axios from 'axios';
const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category | void> => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export default getCategory;
