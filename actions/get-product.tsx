import { Product } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product | void> => {
  // const res = await fetch(`${URL}/${id}`);
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  // return res.json();
};

export default getProduct;
