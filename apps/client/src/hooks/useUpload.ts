import { useMutation } from "react-query";
import { uploadImages } from "../api/uploadImages";

export const useUpload = () => {
  const uploadFiles = useMutation((data) => uploadImages(data));

  return {
    uploadFiles,
  };
};
