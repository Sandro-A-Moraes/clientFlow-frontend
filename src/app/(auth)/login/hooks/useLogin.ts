import { authService } from '@/shared/lib/services/auth.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.login,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['me'],
      });
    },
  });
}
