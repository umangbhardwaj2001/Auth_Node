import axios from "axios";

const getToken = () => {
  return localStorage.getItem("token");
};

const apiClient = axios.create({
  baseURL: "https://vichardhaara.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
