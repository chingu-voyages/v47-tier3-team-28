import http from "./api";

const apiUrl = import.meta.env.VITE_API_URL;

export const signUpStudent = (data) => {
  return http.post(`${apiUrl}/api/v1/register/student`, JSON.stringify(data));
};

export const signUpInstructor = (data) => {
  return http.post(
    `${apiUrl}/api/v1/register/instructor`,
    JSON.stringify(data),
  );
};

export const logIn = (data) => {
  return http.post(`${apiUrl}/api/v1/login`, JSON.stringify(data));
};
