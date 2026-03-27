import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import SignUp from './SignUp';
import MainCalendar from './MainCalendar';
import BrowsePage from './BrowsePage';
import VenuesPage from './VenuesPage';
import OrganizationsPage from './OrganizationsPage';
import AdminPage from './AdminPage';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://127.0.0.1:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username_or_email: email,
          password: password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || 'Login failed');
      }

      localStorage.setItem('token', data.access_token);
      setIsAuthenticated(true);
    } catch (err) {
      console.error('Login error:', err);
      alert(err.message || 'Login failed');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert('Forgot password is not connected yet.');
    setShowForgotPassword(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setEmail('');
    setPassword('');
    setShowForgotPassword(false);
    setShowSignUp(false);
  };

  const handleBackToLogin = () => {
    setShowSignUp(false);
    setShowForgotPassword(false);
  };

  if (showSignUp) {
    return <SignUp onBackToLogin={handleBackToLogin} />;
  }

  if (!isAuthenticated) {
    return (
      <div className="App">
        <div className="login-container">
          <div className="login-card">
            <h1 className="app-title">Networkz Kalander</h1>

            {!showForgotPassword ? (
              <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                  <label htmlFor="email">Email or Username</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email or username"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                  />
                </div>

                <button type="submit" className="login-btn">
                  Sign In
                </button>

                <button
                  type="button"
                  className="forgot-password-btn"
                  onClick={() => setShowForgotPassword(true)}
                >
                  Forgot Password?
                </button>

                <div className="signup-section">
                  <p>Don&apos;t have an account?</p>
                  <button
                    type="button"
                    className="signup-btn"
                    onClick={() => setShowSignUp(true)}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleForgotPassword} className="forgot-password-form">
                <h2>Reset Password</h2>
                <p>Enter your email to receive a password reset link</p>

                <div className="form-group">
                  <label htmlFor="reset-email">Email</label>
                  <input
                    type="email"
                    id="reset-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <button type="submit" className="reset-btn">
                  Send Reset Link
                </button>

                <button
                  type="button"
                  className="back-btn"
                  onClick={() => setShowForgotPassword(false)}
                >
                  Back to Sign In
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/calendar" replace />} />
        <Route path="/calendar" element={<MainCalendar onLogout={handleLogout} />} />
        <Route path="/browse" element={<BrowsePage onLogout={handleLogout} />} />
        <Route path="/venues" element={<VenuesPage onLogout={handleLogout} />} />
        <Route path="/organizations" element={<OrganizationsPage onLogout={handleLogout} />} />
        <Route path="/admin" element={<AdminPage onLogout={handleLogout} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;