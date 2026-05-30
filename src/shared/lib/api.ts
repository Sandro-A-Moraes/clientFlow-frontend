const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface RequestConfig extends Omit<RequestInit, 'body'> {
  body?: unknown;
}

export async function api<T>(
  endpoint: string,
  config?: RequestConfig,
): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...config,
    credentials: 'include', // Include cookies for authentication
    headers: {
      'Content-Type': 'application/json',
      ...(config?.headers || {}),
    },
    body: config?.body ? JSON.stringify(config.body) : undefined,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'API request failed');
  }

  return response.json();
}
