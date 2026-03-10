import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ role }) => {
  const location = useLocation();

  const studentLinks = [
    { path: '/student/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/student/quiz', label: 'Take Quiz', icon: '📝' },
    { path: '/student/progress', label: 'My Progress', icon: '📈' },
    { path: '/student/topics', label: 'Topics', icon: '📚' },
    { path: '/student/recommendations', label: 'Recommendations', icon: '💡' },
  ];

  const instructorLinks = [
    { path: '/instructor/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/instructor/students', label: 'Students', icon: '👥' },
    { path: '/instructor/drift', label: 'Drift Analysis', icon: '📉' },
    { path: '/instructor/alerts', label: 'Alerts', icon: '🔔' },
    { path: '/instructor/reports', label: 'Reports', icon: '📄' },
  ];

  const links = role === 'student' ? studentLinks : instructorLinks;

  return (
    <aside className="w-64 bg-gradient-to-b from-purple-900 to-blue-900 shadow-lg h-screen sticky top-0 border-r border-purple-500 border-opacity-30">
      <div className="p-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition transform hover:scale-105 ${
              location.pathname === link.path
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg'
                : 'text-gray-300 hover:bg-white hover:bg-opacity-10'
            }`}
          >
            <span className="text-xl">{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
