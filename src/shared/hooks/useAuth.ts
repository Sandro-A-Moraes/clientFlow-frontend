import { useQuery } from '@tanstack/react-query';
import { authService } from '../lib/services/auth.service';

export function useAuth() {
  return useQuery({
    queryKey: ['me'],
    queryFn: authService.me,
    retry: false,
  });
}
