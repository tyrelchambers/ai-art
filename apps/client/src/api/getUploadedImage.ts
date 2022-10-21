import { request } from "../config/request";

export const getUploadedImage = (img) => {
  return request.get("/v1/image", {
    params: { ...img },
  });
};
