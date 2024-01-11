import axios, { AxiosInstance } from "axios";
export 
const baseURL = process.env.NODE_ENV === 'production' ? 'https://www.samuelbaran.dev/api/' : 'http://localhost:3000/api/';

export const axiosInstance:AxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 20000,

  });