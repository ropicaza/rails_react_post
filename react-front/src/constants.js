export const API_URL =
  process.env.NODE_ENV === "development"
    ? import.meta.env.VITE_API_URL
    : "https://mern-stack-api.herokuapp.com/api";
