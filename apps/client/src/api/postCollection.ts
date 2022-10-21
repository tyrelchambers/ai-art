import { request } from "../config/request";

export const postCollection = (data) => {
  return request.post("/v1/user/collections", data);
};
