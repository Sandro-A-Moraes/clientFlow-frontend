import Cookies from 'js-cookie';

const ACCESS_TOKEN_KEY = 'access_token';

export function setAccessToken(token: string) {
  Cookies.set(ACCESS_TOKEN_KEY, token, {
    expires: 1,
    secure: true,
    sameSite: 'strict',
  });
}

export function getAccessToken() {
  return Cookies.get(ACCESS_TOKEN_KEY);
}

export function removeAccessToken() {
  Cookies.remove(ACCESS_TOKEN_KEY);
}
