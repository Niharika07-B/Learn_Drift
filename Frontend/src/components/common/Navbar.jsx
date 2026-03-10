import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

const Navbar = ({ role, userName }) => {
  const navigate = useNavigate();
  const { isDark, toggleTheme, theme } = useContext(ThemeContext);
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className={`${isDark ? 'bg-gradient-to-r from-purple-900 to-blue-900 border-purple-500' : 'bg-gradient-to-r from-purple-100 to-blue-100 border-purple-300'} ${isDark ? 'text-white' : 'text-gray-900'} shadow-lg border-b border-opacity-30 transition-theme`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            LearnDrift
          </h1>
          <span className="text-xs bg-purple-700 bg-opacity-50 px-3 py-1 rounded-full border border-purple-400">
            {role}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          {/* Theme Toggle with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className={`theme-toggle-btn ${isDark ? 'bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : 'bg-gradient-to-br from-purple-300 to-blue-300 hover:from-purple-400 hover:to-blue-400'}`}
              title="Theme Options"
            >
              <span className="theme-toggle-icon">
                {isDark ? '🌙' : '☀️'}
              </span>
            </button>

            {/* Theme Menu Dropdown */}
            {showThemeMenu && (
              <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-2xl z-50 ${isDark ? 'glass-card' : 'glass-card-light'}`}>
                <div className="p-3 space-y-2">
                  <button
                    onClick={() => {
                      toggleTheme();
                      setShowThemeMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${isDark ? 'hover:bg-white hover:bg-opacity-10' : 'hover:bg-purple-200 hover:bg-opacity-50'} flex items-center space-x-2`}
                  >
                    <span>🌙</span>
                    <span>Dark Mode</span>
                    {isDark && <span className="ml-auto">✓</span>}
                  </button>
                  <button
                    onClick={() => {
                      toggleTheme();
                      setShowThemeMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${isDark ? 'hover:bg-white hover:bg-opacity-10' : 'hover:bg-purple-200 hover:bg-opacity-50'} flex items-center space-x-2`}
                  >
                    <span>☀️</span>
                    <span>Light Mode</span>
                    {!isDark && <span className="ml-auto">✓</span>}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
              {userName?.charAt(0).toUpperCase()}
            </div>
            <span className={`text-sm ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Welcome, <span className="font-semibold">{userName}</span></span>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition transform hover:scale-105 flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
