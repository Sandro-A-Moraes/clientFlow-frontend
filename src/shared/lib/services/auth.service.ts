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
  accessToken: string;
  refreshToken: string;
  user: IPublicUser;
  success: boolean;
}

export interface RegisterResponse {
  user: IPublicUser;
  success: boolean;
}

export interface refreshResponse {
  accessToken: string;
  refreshToken: string;
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
  const response = await api<{ user: IPublicUser; success: boolean }>(
    '/auth/me',
    {
      method: 'GET',
    },
  );

  return response.user;
}

async function refresh(data: {
  refreshToken: string;
}): Promise<refreshResponse> {
  const response = await api<refreshResponse>('/auth/refresh', {
    method: 'POST',
    body: data,
  });

  return response;
}

export async function logout(): Promise<void> {
  await api('/auth/logout', {
    method: 'POST',
  });
}

export const authService = {
  login,
  register,
  me,
  refresh,
  logout,
};
