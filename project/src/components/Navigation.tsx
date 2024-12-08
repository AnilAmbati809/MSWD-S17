import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, BookOpen, Users, BarChart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/dashboard" className="text-xl font-bold text-indigo-600">Training Portal</Link>
            <div className="hidden md:flex space-x-4">
              {user && (
                <>
                  <NavLink to="/courses" icon={<BookOpen className="w-4 h-4" />} text="Courses" active={isActive('/courses')} />
                  {user.role === 'admin' && (
                    <NavLink to="/manage-users" icon={<Users className="w-4 h-4" />} text="Manage Users" active={isActive('/manage-users')} />
                  )}
                  {(user.role === 'admin' || user.role === 'trainer') && (
                    <NavLink to="/assignments" icon={<BarChart className="w-4 h-4" />} text="Assignments" active={isActive('/assignments')} />
                  )}
                </>
              )}
            </div>
          </div>
          {user && (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                <span className="font-medium">{user.name}</span>
                <span className="ml-2 text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full capitalize">
                  {user.role}
                </span>
              </span>
              <button
                onClick={logout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text, active }: { to: string; icon: React.ReactNode; text: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
        active
          ? 'text-indigo-600 bg-indigo-50'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}