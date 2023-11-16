import axios, { AxiosInstance } from "axios";

const AxiosDelete: AxiosInstance = axios.create({
  method: "DELETE",
  baseURL: process.env.BACKEND_URL,
});

export default AxiosDelete;
