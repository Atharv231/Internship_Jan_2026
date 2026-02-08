import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

let isRefreshing = false;
let subscribers = [];

const onRefreshed = () => {
  subscribers.forEach((cb) => cb());
  subscribers = [];
};

const addSubscriber = (cb) => {
  subscribers.push(cb);
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/login") &&
      !originalRequest.url.includes("/refresh")
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve) => {
          addSubscriber(() => resolve(api(originalRequest)));
        });
      }

      isRefreshing = true;

      try {
        await api.post("/refresh");
        isRefreshing = false;
        onRefreshed();
        return api(originalRequest);
      } catch (err) {
        isRefreshing = false;
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
