import axios, { AxiosInstance } from "axios";

const AxiosGet: AxiosInstance = axios.create({
  method: "GET",
  baseURL: process.env.BACKEND_URL,
});

export default AxiosGet;
