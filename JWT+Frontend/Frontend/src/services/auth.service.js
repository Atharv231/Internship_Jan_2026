import api from "./api";

export const loginRequest = (data) => api.post("/login", data);
export const logoutRequest = () => api.post("/logout");
export const checkAuthRequest = () => api.get("/checkauth");
