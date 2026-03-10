import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [theme, setTheme] = useState('dark'); // dark, light, auto

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    setIsDark(savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const setAutoTheme = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const newTheme = prefersDark ? 'dark' : 'light';
    setIsDark(prefersDark);
    setTheme('auto');
    localStorage.setItem('theme', 'auto');
  };

  return (
    <ThemeContext.Provider value={{ isDark, theme, toggleTheme, setAutoTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
