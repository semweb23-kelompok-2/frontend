import axios, { AxiosInstance } from "axios";

const axiosPost: AxiosInstance = axios.create({
  method: "POST",
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosPost;
