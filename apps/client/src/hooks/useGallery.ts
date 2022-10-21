import { useQuery } from "react-query";
import { getGallery } from "../api/getGallery";

export const useGallery = () => {
  const query = useQuery("user_gallery", getGallery);

  return [query.data];
};
