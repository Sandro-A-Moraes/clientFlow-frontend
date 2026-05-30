import { useMutation } from '@tanstack/react-query';
import { authService } from '@/shared/lib/services/auth.service';

export function useRegister() {
  return useMutation({
    mutationFn: authService.register,
  });
}
