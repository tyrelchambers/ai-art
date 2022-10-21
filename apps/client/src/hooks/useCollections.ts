import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUserCollection } from "../api/getUserCollections";
import { postCollection } from "../api/postCollection";

export const useCollections = () => {
  const queryClient = useQueryClient();

  const query = useQuery("collections", getUserCollection);

  const mutation = useMutation((data) => postCollection(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("collections");
    },
  });

  return { collections: query.data, createCollection: mutation };
};
