import { createContext, useState } from 'react';
import { authService, IPublicUser } from '../lib/services/auth.service';

interface IAuthContext {
  user: IPublicUser | null;
  setUser: (user: IPublicUser | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => {},
  login: async () => {},
  logout: () => {},
});

export interface IAuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<IPublicUser | null>(null);

  const login = async (email: string, password: string) => {
    await authService.login({ email, password });

    const fullUser = await authService.me();
    setUser(fullUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
