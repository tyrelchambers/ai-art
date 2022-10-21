import axios from "axios";
import config from "./config";

const instance = axios.create({
  baseURL: `${config[process.env.NODE_ENV].backend}/api`,
});

instance.interceptors.request.use(
  function (config) {
    config.withCredentials = true;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (config) => {
    return config.data;
  },
  (error) => Promise.reject(error)
);

export const request = instance;
