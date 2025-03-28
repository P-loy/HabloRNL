import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

AxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers["Authorization"] = `Bearer ${token}`
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  } else { config.headers["Content-Typre"] = "application/json"
    } 
    return config;
});

AxiosInstance.interceptors.response.use((response) => { }console.error( 'Unexpected error response:'))