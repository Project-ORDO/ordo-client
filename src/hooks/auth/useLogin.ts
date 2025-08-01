// hooks/useAuth.ts
import { login } from "@/services/auth.service";
import type { LoginPayload } from "@/types/Auth.types";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload.email, payload.password),
    onSuccess: () => {
      // toast.success("Login successful!");
      // Optional: redirect after login
      // window.location.href = '/dashboard';
    },
    onError: () => {
      // toast.error(error?.response?.data?.message || "Login failed");
    },
  });
};
