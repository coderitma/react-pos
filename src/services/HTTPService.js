import axios from "axios";

const HTTPService = axios.create({
  timeout: 1000,
});

HTTPService.interceptors.request.use((req) => {
  document.body.classList.add("loading-indicator");
  return req;
});

HTTPService.interceptors.response.use((res) => {
  document.body.classList.remove("loading-indicator");

  if (res.status === 401) {
    window.location.href = "/";
  }

  return res;
});

export default HTTPService;
