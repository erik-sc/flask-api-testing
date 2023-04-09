import axios from "axios";

const defaultOptions = {
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
};

const axiosInstance = axios.create(defaultOptions);

export default axiosInstance;
