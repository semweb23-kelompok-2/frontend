import axios, { AxiosInstance } from "axios";

const axiosDelete: AxiosInstance = axios.create({
  method: "DELETE",
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export default axiosDelete;
