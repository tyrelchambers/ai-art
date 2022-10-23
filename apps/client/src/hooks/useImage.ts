import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUploadedImage } from "../api/getUploadedImage";
import { updateImage } from "../api/updateImage";
import { ImageFile } from "../types";

export const useImage = (uuid?: string) => {
  const client = useQueryClient();

  const query = useQuery(["image"], () => getUploadedImage(uuid), {
    enabled: !!uuid,
  });

  const update = useMutation((data) => updateImage(data), {
    onSuccess: () => {
      client.invalidateQueries("user_gallery");
      client.invalidateQueries("image");
    },
  });

  return { image: query.data, update };
};
