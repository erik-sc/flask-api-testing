import axios from "axios";

const defaultOptions = {
  baseURL: "https://api.todoist.com/rest/v2",
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default axiosInstance;
