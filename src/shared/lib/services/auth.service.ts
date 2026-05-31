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

export interface LoginResponse {
  user: IPublicUser;
  success: boolean;
}

export interface RegisterResponse {
  user: IPublicUser;
  success: boolean;
}

async function login(data: LoginDTO): Promise<LoginResponse> {
  return api<LoginResponse>('/auth/login', {
    method: 'POST',
    body: data,
  });
}

async function register(data: RegisterDTO): Promise<RegisterResponse> {
  return api<RegisterResponse>('/auth/register', {
    method: 'POST',
    body: data,
  });
}

async function me(): Promise<IPublicUser> {
  const response = await api<{
    user: IPublicUser;
    success: boolean;
  }>('/auth/me', {
    method: 'GET',
  });

  return response.user;
}

async function logout(): Promise<void> {
  await api('/auth/logout', {
    method: 'POST',
  });
}

export const authService = {
  login,
  register,
  me,
  logout,
};
