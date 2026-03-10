import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Temporary mock login - bypass backend for frontend development
    setTimeout(() => {
      try {
        // Store user info
        const userName = email.split('@')[0] || 'User';
        localStorage.setItem('userRole', role);
        localStorage.setItem('userName', userName);
        localStorage.setItem('userId', role === 'student' ? '1' : '101');
        localStorage.setItem('token', 'mock-token-' + Date.now());
        
        // Navigate based on role
        if (role === 'student') {
          navigate('/student/dashboard');
        } else {
          navigate('/instructor/dashboard');
        }
      } catch (err) {
        setError('Login failed. Please try again.');
      } finally {
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'galaxy-bg' : 'light-bg'} flex items-center justify-center p-4 transition-theme`}>
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isDark && (
          <>
            <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
            <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{top: '60%', left: '80%', animationDelay: '1s'}}></div>
            <div className="absolute w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{top: '80%', left: '20%', animationDelay: '2s'}}></div>
          </>
        )}
      </div>

      {/* Theme Toggle Button - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <div className="relative">
          <button
            onClick={() => setShowThemeMenu(!showThemeMenu)}
            className={`theme-toggle-btn ${isDark ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gradient-to-br from-purple-300 to-blue-300'}`}
            title="Theme Options"
          >
            <span className="theme-toggle-icon">
              {isDark ? '🌙' : '☀️'}
            </span>
          </button>

          {/* Theme Menu */}
          {showThemeMenu && (
            <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-2xl z-50 ${isDark ? 'glass-card' : 'glass-card-light'}`}>
              <div className="p-3 space-y-2">
                <button
                  onClick={() => {
                    if (!isDark) toggleTheme();
                    setShowThemeMenu(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${isDark ? 'hover:bg-white hover:bg-opacity-10 text-white' : 'hover:bg-purple-200 hover:bg-opacity-50 text-gray-900'} flex items-center space-x-2`}
                >
                  <span>🌙</span>
                  <span>Dark Mode</span>
                  {isDark && <span className="ml-auto">✓</span>}
                </button>
                <button
                  onClick={() => {
                    if (isDark) toggleTheme();
                    setShowThemeMenu(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${isDark ? 'hover:bg-white hover:bg-opacity-10 text-white' : 'hover:bg-purple-200 hover:bg-opacity-50 text-gray-900'} flex items-center space-x-2`}
                >
                  <span>☀️</span>
                  <span>Light Mode</span>
                  {!isDark && <span className="ml-auto">✓</span>}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={`${isDark ? 'glass-card' : 'glass-card-light'} rounded-2xl shadow-2xl p-8 w-full max-w-md relative z-10 transition-theme`}>
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4 shadow-lg glow-purple">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>LearnDrift</h1>
          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>AI-Powered Educational Analytics</p>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg text-red-200 text-sm animate-pulse">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className={`block ${isDark ? 'text-gray-200' : 'text-gray-700'} text-sm font-semibold mb-2`}>Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={`w-full px-4 py-3 ${isDark ? 'bg-white bg-opacity-10 border-gray-400 text-white' : 'bg-white bg-opacity-70 border-purple-300 text-gray-900'} border border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
            >
              <option value="student" className={isDark ? 'text-gray-900' : 'text-gray-900'}>🎓 Student</option>
              <option value="instructor" className={isDark ? 'text-gray-900' : 'text-gray-900'}>👨‍🏫 Instructor</option>
            </select>
          </div>
          
          <div>
            <label className={`block ${isDark ? 'text-gray-200' : 'text-gray-700'} text-sm font-semibold mb-2`}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className={`w-full px-4 py-3 ${isDark ? 'bg-white bg-opacity-10 border-gray-400 text-white placeholder-gray-400' : 'bg-white bg-opacity-70 border-purple-300 text-gray-900 placeholder-gray-600'} border border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
              required
            />
          </div>
          
          <div>
            <label className={`block ${isDark ? 'text-gray-200' : 'text-gray-700'} text-sm font-semibold mb-2`}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={`w-full px-4 py-3 ${isDark ? 'bg-white bg-opacity-10 border-gray-400 text-white placeholder-gray-400' : 'bg-white bg-opacity-70 border-purple-300 text-gray-900 placeholder-gray-600'} border border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed glow"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </span>
            ) : (
              'Login to Dashboard'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
            Demo Mode: Use any email/password
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
