import React from 'react';
import { useAuth } from '../context/AuthContext';

export function Assignments() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Assignments</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        {user?.role === 'trainer' && (
          <button className="mb-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Create New Assignment
          </button>
        )}
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Project Planning Exercise</h3>
            <p className="text-gray-600 mb-4">Create a project plan for a software development project.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Due: March 30, 2024</span>
              <button className="text-indigo-600 hover:text-indigo-800">
                {user?.role === 'employee' ? 'Submit Assignment' : 'View Submissions'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}