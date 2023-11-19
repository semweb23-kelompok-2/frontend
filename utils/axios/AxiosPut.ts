import axios, { AxiosInstance } from "axios";

const axiosPut: AxiosInstance = axios.create({
  method: "PUT",
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export default axiosPut;
