import axios from "axios";

console.log(process.env.REACT_APP_BASE_URL_API);
const axiosInstance = axios.create({
  /*   baseURL: "https://661085820640280f219d1cd2.mockapi.io/api", */
  baseURL: process.env.REACT_APP_BASE_URL_API,
});

export const getProducts = async () => {
  const resp = await axiosInstance.get("/products");

  return resp.data;
};

export const postMessage = async (body) => {
  const resp = await axiosInstance.post("/messages", body);
  return resp.data;
};

export const postProducts = async (body) => {
  const formData = new FormData();
  Object.entries(body).forEach(([key, value]) => {
    formData.append(key, value);
  });
  const resp = await axiosInstance.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return resp.data;
};
