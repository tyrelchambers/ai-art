import { request } from "../config/request";
import { AuthAPI } from "../types/api";

export const postLogin = async (data: AuthAPI) => {
  await request.post("/v1/auth/login", data);
};
