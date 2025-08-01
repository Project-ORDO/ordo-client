import { register } from "@/services/auth.service";
import type { RegisterPayload } from "@/types/Auth.types";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => register(payload.name, payload.email, payload.password),
    onSuccess: () => {
      // toast.success("Registration successful!");
      // Optional: redirect after register
      // window.location.href = '/login';
    },
    onError: () => {
      // toast.error(error?.response?.data?.message || "Registration failed");
    },
  });
};