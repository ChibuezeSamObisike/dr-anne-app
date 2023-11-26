import axios, { AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: "https://drai-production.up.railway.app/",
  withCredentials: true,
});

export default http;
