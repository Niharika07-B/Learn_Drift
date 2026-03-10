import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Card = ({ title, value, icon, color = 'blue', subtitle }) => {
  const { isDark } = useContext(ThemeContext);

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    yellow: 'from-yellow-500 to-yellow-600',
    red: 'from-red-500 to-red-600',
    purple: 'from-purple-500 to-purple-600',
  };

  return (
    <div className={`${isDark ? 'glass-card bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:scale-105`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mb-1 font-medium`}>
            {title}
          </p>
          <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {value}
          </p>
          {subtitle && (
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'} mt-1`}>
              {subtitle}
            </p>
          )}
        </div>
        <div className={`text-4xl p-4 rounded-full bg-gradient-to-r ${colorClasses[color]} shadow-lg`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Card;
