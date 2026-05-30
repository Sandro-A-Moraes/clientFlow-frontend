import { authService } from '@/shared/lib/services/auth.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: authService.login,

    onSuccess() {
      router.push('/dashboard');
    },
  });
}
