import { useAuth } from "../hooks/useAuth";

export const AuthProvider = (props) => {
  useAuth();

  return props.children;
};
