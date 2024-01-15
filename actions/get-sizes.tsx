import { Size } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes/`;

const getSizes = async (): Promise<Size[]> => {
  // const res = await fetch(URL);
    const response = await axios.get(URL);
    return response.data;

  // return res.json();
};

export default getSizes;
