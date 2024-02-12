import { Axios } from "axios";

const http = new Axios({
  url: "",
  headers: {
    "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((request) => {
  if (localStorage.getItem("userToken")) {
    request.headers.Authorization = `Bearer ${localStorage.getItem(
      "userToken",
    )}`;
  }

  return request;
});

http.interceptors.response.use(
  (response) => {
    const data = JSON.parse(response.data || "{}");

    if (response.status === 401) {
      localStorage.removeItem("userToken");
      window.location.assign("/login");
    }

    if (response.status >= 300) {
      return Promise.reject(data);
    }

    return Promise.resolve(data);
  },
  (error) => Promise.reject(error),
);

export default http;
