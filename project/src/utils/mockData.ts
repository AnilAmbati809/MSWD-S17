import { v4 as uuidv4 } from 'uuid';
import { User } from '../types';

export const initialUsers: User[] = [
  {
    id: uuidv4(),
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    password: 'password'
  },
  {
    id: uuidv4(),
    name: 'Trainer User',
    email: 'trainer@example.com',
    role: 'trainer',
    password: 'password'
  },
  {
    id: uuidv4(),
    name: 'Employee User',
    email: 'employee@example.com',
    role: 'employee',
    password: 'password'
  }
];

export const saveToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};