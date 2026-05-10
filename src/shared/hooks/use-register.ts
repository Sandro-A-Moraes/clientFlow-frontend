import { useMutation } from '@tanstack/react-query';
import { register } from '@/shared/lib/services/auth.service';

export function useRegister() {
  return useMutation({
    mutationFn: register,
  });
}
