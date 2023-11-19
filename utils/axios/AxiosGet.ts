import axios, { AxiosInstance } from "axios";

const axiosGet: AxiosInstance = axios.create({
  method: "GET",
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export default axiosGet;
