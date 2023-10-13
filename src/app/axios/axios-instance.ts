import axios, { AxiosInstance } from "axios";

const baseURL = process.env.NODE_ENV === 'production' ? 'https://portfolio-final-khaki.vercel.app/api/' : 'http://localhost:3000/api/';

export const axiosInstance:AxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });