import { useQuery } from "react-query";
import { getUploadedImage } from "../api/getUploadedImage";
import { ImageFile } from "../types";

export const useImage = (img, deps) => {
  console.log(img);

  const query = useQuery(
    ["uploaded_image", ...deps],
    () => getUploadedImage(img),
    {
      enabled: !!img?.url,
    }
  );

  return [query];
};
