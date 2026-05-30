import { IUser } from '@/shared/types/user';
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

export interface IPublicUser {
  id: string;
  name: string;
  email: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: IPublicUser;
  success: boolean;
}

interface RegisterResponse {
  user: IPublicUser;
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

async function me(): Promise<IPublicUser> {
  const response = await api<IPublicUser>('/auth/me', {
    method: 'GET',
  });

  return response;
}

export const authService = {
  login,
  register,
  me,
};
