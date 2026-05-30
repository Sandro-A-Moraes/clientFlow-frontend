import { useQuery } from '@tanstack/react-query';
import { authService } from '../lib/services/auth.service';

const useAuth = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['me'],
    queryFn: authService.me,
    retry: false,
  });

  return { user, isLoading, error };
};
export default useAuth;
