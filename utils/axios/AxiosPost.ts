import axios, { AxiosInstance } from "axios";

const AxiosPost: AxiosInstance = axios.create({
  method: "POST",
  baseURL: process.env.BACKEND_URL,
});

export default AxiosPost;
