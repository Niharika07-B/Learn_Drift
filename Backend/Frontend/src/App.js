import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';

function AppContent() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
