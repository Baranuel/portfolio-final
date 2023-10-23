import axios, { AxiosInstance } from "axios";

const baseURL = process.env.NODE_ENV === 'production' ? 'https://portfolio-final-khaki.vercel.app/api/' : 'http://localhost:3000/api/';

export const axiosInstance:AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 20000,
  });