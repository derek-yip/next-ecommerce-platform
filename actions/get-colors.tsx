import { Color } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors/`;

const getColors = async (): Promise<Color[]> => {
  // const res = await fetch(URL);
    const response = await axios.get(URL);
    return response.data;
  // return res.json();
};

export default getColors;
