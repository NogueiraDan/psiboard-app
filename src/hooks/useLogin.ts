import { useMutation } from "@tanstack/react-query";
import api from "../services/api";
import { REACT_APP_BASE_URL } from "../utils";

interface Props {
  email: string;
  password: string;
}

export function useLogin() {
  const { mutateAsync } = useMutation({
    mutationKey: ["login"],
    mutationFn: async ({ email, password }: Props) => {
      try {
        const response = await api.post(`${REACT_APP_BASE_URL}/auth/login`, {
          email,
          password,
        });
        const user = {
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          access_token: response.data.access_token,
        };
        return user;
      } catch (error) {
        console.error("Error during login:", error);
        throw error;
      }
    },
  });

  return {
    login: mutateAsync,
  };
}
