import { request } from "../config/request";

export const getUserCollection = () => {
  return request.get("/v1/user/collections");
};
