import { request } from "../config/request";

export const getGallery = () => {
  return request.get("/v1/user/gallery");
};
