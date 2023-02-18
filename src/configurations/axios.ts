import axios from "axios";

export const AxiosLocalInstance = axios.create({
  baseURL: process.env.NEXT_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const AxiosWeatherInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
