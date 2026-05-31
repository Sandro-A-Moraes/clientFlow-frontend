const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface RequestConfig extends Omit<RequestInit, 'body'> {
  body?: unknown;
}

async function refreshToken(): Promise<void> {
  const response = await fetch(`${BASE_URL}/auth/refresh`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Refresh token expired');
  }
}

export async function api<T>(
  endpoint: string,
  config?: RequestConfig,
): Promise<T> {
  const makeRequest = () =>
    fetch(`${BASE_URL}${endpoint}`, {
      ...config,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...(config?.headers || {}),
      },
      body: config?.body ? JSON.stringify(config.body) : undefined,
    });

  let response = await makeRequest();

  if (response.status === 401) {
    try {
      await refreshToken();

      response = await makeRequest();
    } catch {
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }

      throw new Error('Session expired. Please log in again.');
    }
  }

  if (!response.ok) {
    const errorData = await response.json();

    throw new Error(errorData.message || 'API request failed');
  }

  return response.json() as Promise<T>;
}
