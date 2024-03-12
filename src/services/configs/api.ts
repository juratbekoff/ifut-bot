import axios from "axios";

// const baseURL_LOCAL = "http://localhost:3000/api/v1";
const baseURL_PROD = "http://173.212.232.106:3002/api/v1";

const api = axios.create({
  baseURL: baseURL_PROD,
});

api.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("accessToken");

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    console.log(error);

    if (error.code === "ERR_NETWORK") {
      localStorage.setItem("pathname_on_error", window.location.pathname);
      window.location.href = "/500";
    }

    return Promise.reject(error);
  }
);

export { api };
