import { Category } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories/`;

const getCategories = async (): Promise<Category[]> => {
  // const res = await fetch(URL);
  const response = await axios.get(URL);
  return response.data;
  // return res.json();
};

export default getCategories;
