import { request } from "../config/request";

export const getUploadedImage = (uuid: string) => {
  return request.get("/v1/image", {
    params: { imageId: uuid },
  });
};
