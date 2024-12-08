import React from 'react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 mb-4">
          Welcome to the Training Portal, your comprehensive platform for employee training and development.
          Our system is designed to facilitate seamless learning experiences and professional growth.
        </p>
        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          To provide an efficient and engaging platform for employee training, enabling organizations
          to develop their workforce effectively and track progress systematically.
        </p>
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Comprehensive course management</li>
          <li>Interactive assignments and assessments</li>
          <li>Progress tracking and reporting</li>
          <li>Role-based access control</li>
        </ul>
      </div>
    </div>
  );
}