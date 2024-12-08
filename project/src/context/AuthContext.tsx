import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { initialUsers, saveToLocalStorage, getFromLocalStorage } from '../utils/mockData';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  users: User[];
  addUser: (user: Omit<User, 'id'>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedUser = getFromLocalStorage('user');
    if (storedUser) {
      setUser(storedUser);
    }

    const storedUsers = getFromLocalStorage('users');
    if (storedUsers) {
      setUsers(storedUsers);
    } else {
      setUsers(initialUsers);
      saveToLocalStorage('users', initialUsers);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (!foundUser) {
      throw new Error('Invalid credentials');
    }
    setUser(foundUser);
    saveToLocalStorage('user', foundUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const addUser = (newUser: Omit<User, 'id'>) => {
    const userWithId = { ...newUser, id: crypto.randomUUID() };
    const updatedUsers = [...users, userWithId];
    setUsers(updatedUsers);
    saveToLocalStorage('users', updatedUsers);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      isAuthenticated: !!user,
      users,
      addUser
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};