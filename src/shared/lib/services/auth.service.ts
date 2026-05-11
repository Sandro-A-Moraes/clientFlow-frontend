import { api } from '../api';

interface RegisterDTO {
  name: string;
  email: string;
  password: string;
  termsAccepted: boolean;
}

interface LoginDTO {
  email: string;
  password: string;
}

export async function login(data: LoginDTO) {
  const response = await api('/auth/login', {
    method: 'POST',
    body: data,
  });

  return response;
}

export async function register(data: RegisterDTO) {
  const response = await api('/auth/register', {
    method: 'POST',
    body: data,
  });

  return response;
}
