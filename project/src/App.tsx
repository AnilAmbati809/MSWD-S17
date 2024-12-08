import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Layout } from './components/Layout';
import { LoginForm } from './components/LoginForm';
import { Landing } from './pages/Landing';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Courses } from './pages/Courses';
import { ManageUsers } from './pages/ManageUsers';
import { Assignments } from './pages/Assignments';
import { PrivateRoute } from './components/PrivateRoute';
import { useAuth } from './context/AuthContext';

function AppContent() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Landing />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginForm />} />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      } />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/courses" element={
        <PrivateRoute>
          <Courses />
        </PrivateRoute>
      } />
      <Route path="/manage-users" element={
        <PrivateRoute roles={['admin']}>
          <ManageUsers />
        </PrivateRoute>
      } />
      <Route path="/assignments" element={
        <PrivateRoute roles={['admin', 'trainer']}>
          <Assignments />
        </PrivateRoute>
      } />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <AppContent />
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;