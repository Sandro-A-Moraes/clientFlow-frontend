import { useMutation } from '@tanstack/react-query';
import { login } from '@/shared/lib/services/auth.service';

export function useLogin() {
  return useMutation({
    mutationFn: login,
  });
}
