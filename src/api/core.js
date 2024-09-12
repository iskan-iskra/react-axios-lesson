import { BASE_URL } from "@/const";
import axios from "axios";

export const HttpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

HttpClient.interceptors.response.use((response) => response.data);
