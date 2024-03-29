import { Billboard } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  // const res = await fetch(`${URL}/${id}`);
  // return res.json();

  const response = await axios.get(`${URL}/${id}`);
  return response.data;
};

export default getBillboard;
