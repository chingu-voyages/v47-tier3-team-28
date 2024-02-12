import http from "./api";

const apiUrl = import.meta.env.VITE_API_URL;

export const getUser = (id) => {
  return http.get(`${apiUrl}/api/v1/user/${id}`);
};
