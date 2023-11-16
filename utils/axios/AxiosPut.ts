import axios, { AxiosInstance } from "axios";

const AxiosPut: AxiosInstance = axios.create({
  method: "PUT",
  baseURL: process.env.BACKEND_URL,
});

export default AxiosPut;
