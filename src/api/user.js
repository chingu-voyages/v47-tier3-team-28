import http from "./api";

export const getUser = (id) => {
  return http.get(`http://localhost:3001/api/v1/user/${id}`);
};
