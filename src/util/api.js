import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://661085820640280f219d1cd2.mockapi.io/api/",
});

export const getProducts = async () => {
  const resp = await axiosInstance.get("/products");

  return resp.data;
};