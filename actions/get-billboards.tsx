import { Billboard } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards/`;

const getBillboards = async (): Promise<Billboard[] | void> => {
  // const res = await fetch(`${URL}`);
  // return res.json();
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getBillboards;
