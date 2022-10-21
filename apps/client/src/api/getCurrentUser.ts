import { request } from "../config/request";

export const getCurrentUser = () => {
  return request.get("/v1/user/me");
};
