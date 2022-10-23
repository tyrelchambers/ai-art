import { request } from "../config/request";

export const updateImage = (data) => {
  return request.post("/v1/image", data);
};
