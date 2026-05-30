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

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  success: boolean;
}

interface RegisterResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  success: boolean;
}

async function login(data: LoginDTO): Promise<LoginResponse> {
  const response = await api<LoginResponse>('/auth/login', {
    method: 'POST',
    body: data,
  });

  return response;
}

async function register(data: RegisterDTO): Promise<RegisterResponse> {
  const response = await api<RegisterResponse>('/auth/register', {
    method: 'POST',
    body: data,
  });

  return response;
}

export const authService = {
  login,
  register,
};
