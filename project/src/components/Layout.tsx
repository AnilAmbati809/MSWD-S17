import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigation } from './Navigation';

export function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {isAuthenticated && (
        <div className="sticky top-0 z-50">
          <Navigation />
        </div>
      )}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}