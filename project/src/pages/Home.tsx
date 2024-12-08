import React from 'react';
import { useAuth } from '../context/AuthContext';

export function Home() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Welcome to Training Portal</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Hello, {user?.name}!</h2>
        <p className="text-gray-600 mb-4">
          This is your personalized dashboard where you can:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {user?.role === 'admin' && (
            <>
              <li>Manage employees and trainers</li>
              <li>Overview all courses and assignments</li>
              <li>Monitor training progress</li>
            </>
          )}
          {user?.role === 'trainer' && (
            <>
              <li>Create and manage courses</li>
              <li>Create assignments</li>
              <li>Review employee progress</li>
            </>
          )}
          {user?.role === 'employee' && (
            <>
              <li>Access your assigned courses</li>
              <li>Complete assignments</li>
              <li>Track your progress</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}