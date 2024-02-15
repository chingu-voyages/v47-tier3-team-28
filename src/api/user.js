import http from "./api";

const apiUrl = import.meta.env.VITE_API_URL;

export const getUser = (id) => {
  return http.get(`${apiUrl}/api/v1/user/${id}`);
};

export const updatePassword = (data) => {
  return http.put(`${apiUrl}/api/v1/user/updatePassword`, JSON.stringify(data));
};

export const updateProfile = (data) => {
  return http.put(`${apiUrl}/api/v1/user/updateProfile`, JSON.stringify(data));
};
