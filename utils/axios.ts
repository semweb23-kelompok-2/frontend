import axios, { AxiosInstance } from "axios";

export const axiosGet: AxiosInstance = axios.create({
  method: "GET",
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const axiosPost: AxiosInstance = axios.create({
  method: "POST",
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const axiosPut: AxiosInstance = axios.create({
  method: "PUT",
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const axiosDelete: AxiosInstance = axios.create({
  method: "DELETE",
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});
