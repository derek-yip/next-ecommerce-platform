import { Category } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories/`;

const getCategories = async (): Promise<Category[] | void> => {
  // const res = await fetch(URL);
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  // return res.json();
};

export default getCategories;
