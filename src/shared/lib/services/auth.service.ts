import { api } from '../api';

interface RegisterDTO {
  name: string;
  email: string;
  password: string;
  termsAccepted: boolean;
}

export async function register(data: RegisterDTO) {
  const response = await api('/auth/register', {
    method: 'POST',
    body: data,
  });

  return response;
}
