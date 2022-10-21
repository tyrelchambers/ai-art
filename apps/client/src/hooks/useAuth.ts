import { showNotification } from "@mantine/notifications";
import { useNavigate } from "react-location";
import { useMutation, useQuery } from "react-query";
import { getCurrentUser } from "../api/getCurrentUser";
import { postLogin } from "../api/postLogin";
import { postRegisterUser } from "../api/postRegisterUser";
import { AuthAPI } from "../types/api";

export const useAuth = () => {
  const navigate = useNavigate();
  const register = useMutation((data: AuthAPI) => postRegisterUser(data));

  const login = useMutation((data: AuthAPI) => postLogin(data), {
    onSuccess: () => {
      navigate({
        to: "/upload",
      });
    },
  });

  const getUser = useQuery("user", getCurrentUser, {
    retry: false,
  });

  return {
    register: register.mutate,
    login: login.mutate,
    currentUser: getUser.data,
  };
};
