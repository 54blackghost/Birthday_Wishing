import React, { createContext, useContext, useState } from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  birthday: string;
  shareLink: string;
  avatarUrl?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string, birthday: string) => User;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const generateLink = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 8; i++) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, _password: string): boolean => {
    // Mock login
    const mockUser: User = {
      id: "user-1",
      name: "Alex Johnson",
      email,
      birthday: "2026-06-15",
      shareLink: generateLink(),
    };
    setUser(mockUser);
    return true;
  };

  const signup = (name: string, email: string, _password: string, birthday: string): User => {
    const newUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      birthday,
      shareLink: generateLink(),
    };
    setUser(newUser);
    return newUser;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
