import { Axios } from "axios";

const http = new Axios({
  url: "",
  headers: {
    "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

// http.interceptors.request.use((request) => {
//   request.headers.Authorization = `Bearer ${localStorage.getItem("userToken")}`;
// });

http.interceptors.response.use(
  (response) => {
    const data = JSON.parse(response.data || "{}");

    if (response.status >= 300) {
      return Promise.reject(data);
    }

    return Promise.resolve(data);
  },
  (error) => Promise.reject(error),
);

export default http;
