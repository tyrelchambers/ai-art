import { request } from "../config/request";

export const uploadImages = (data) => {
  return request.post("http://localhost:4000/api/v1/upload/publish", data);
};
