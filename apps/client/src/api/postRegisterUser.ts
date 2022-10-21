import { request } from "../config/request";
import { AuthAPI } from "../types/api";

export const postRegisterUser = (data: AuthAPI) => {
  return request.post("/v1/auth/register", data);
};
