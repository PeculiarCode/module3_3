import axios from "axios";
const request = axios.create({
  baseURL: "https://conduit.productionready.io/"
});
request.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config;
  },
  error => Promise.reject(error)
  // Do something with request error
);

// Add a response interceptor
request.interceptors.response.use(
  response => response,
  // Do something with response data
  error => Promise.reject(error)
  // Do something with response error
);
export default request;
