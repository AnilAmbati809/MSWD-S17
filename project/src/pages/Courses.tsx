import React from 'react';
import { useAuth } from '../context/AuthContext';

export function Courses() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        {user?.role === 'trainer' && (
          <button className="mb-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Create New Course
          </button>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Introduction to Project Management</h3>
            <p className="text-gray-600 mb-4">Learn the fundamentals of project management.</p>
            <button className="text-indigo-600 hover:text-indigo-800">View Course</button>
          </div>
        </div>
      </div>
    </div>
  );
}