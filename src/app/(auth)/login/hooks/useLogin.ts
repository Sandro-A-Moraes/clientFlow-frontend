import { authService } from '@/shared/lib/services/auth.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.login,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['me'],
      });

      router.push('/dashboard');
    },
  });
}
