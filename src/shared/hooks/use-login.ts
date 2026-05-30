import { useMutation } from '@tanstack/react-query';
import { authService } from '@/shared/lib/services/auth.service';

export function useLogin() {
  return useMutation({
    mutationFn: authService.login,
  });
}
