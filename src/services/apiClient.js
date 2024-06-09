import axios from "axios";

export const foodiesApiClient = axios.create({
  // поміняти шлях до бека
  baseURL: "https://foodies-back-end.onrender.com/api/",
});

export const setAuthHeader = (token) => {
  foodiesApiClient.defaults.headers.common.Authorization = token
    ? `Bearer ${token}`
    : "";
};
