import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Users, BarChart, Shield } from 'lucide-react';

export function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-indigo-600">Training Portal</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
              <Link to="/login" className="text-indigo-600 hover:text-indigo-700 font-medium">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Transform Your</span>
                  <span className="block text-indigo-600">Employee Training</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Streamline your organization's training process with our comprehensive learning management system.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      onClick={() => navigate('/login')}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to manage training
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <Feature
                icon={<BookOpen className="h-6 w-6" />}
                title="Course Management"
                description="Create and manage comprehensive training courses"
              />
              <Feature
                icon={<Users className="h-6 w-6" />}
                title="User Management"
                description="Easily manage employees and trainers"
              />
              <Feature
                icon={<BarChart className="h-6 w-6" />}
                title="Progress Tracking"
                description="Monitor and analyze training progress"
              />
              <Feature
                icon={<Shield className="h-6 w-6" />}
                title="Secure Access"
                description="Role-based access control for all users"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="relative">
      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
        {icon}
      </div>
      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{title}</p>
      <p className="mt-2 ml-16 text-base text-gray-500">{description}</p>
    </div>
  );
}