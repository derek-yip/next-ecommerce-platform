import { Color } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors/`;

const getColors = async (): Promise<Color[] | void> => {
  // const res = await fetch(URL);
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  // return res.json();
};

export default getColors;
