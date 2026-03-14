import React, { useState, useEffect } from 'react';

const DriftWarningPanel = ({ topic, accuracyDrop, timeIncrease, isDark }) => {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative overflow-hidden rounded-2xl p-6 border-2 border-red-500 ${
      isDark ? 'bg-red-900 bg-opacity-20' : 'bg-red-50'
    } shadow-2xl`}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 animate-pulse" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className={`text-3xl animate-bounce ${isBlinking ? 'opacity-100' : 'opacity-50'}`}>
              ⚠️
            </span>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-red-300' : 'text-red-700'}`}>
              Drift Detected in {topic}
            </h3>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            isDark ? 'bg-red-600 text-white' : 'bg-red-200 text-red-800'
          }`}>
            High Risk
          </span>
        </div>

        <div className="space-y-3 mb-6">
          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} border-l-4 border-red-500`}>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Accuracy Trend</p>
            <p className={`text-2xl font-bold ${isDark ? 'text-red-400' : 'text-red-600'}`}>
              ↓ {accuracyDrop}% drop
            </p>
            <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>in last 3 quizzes</p>
          </div>

          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} border-l-4 border-orange-500`}>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Solving Time</p>
            <p className={`text-2xl font-bold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
              ↑ {timeIncrease}% increase
            </p>
            <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>taking longer to solve</p>
          </div>
        </div>

        <div className={`p-4 rounded-lg ${isDark ? 'bg-blue-900 bg-opacity-30' : 'bg-blue-50'} border-l-4 border-blue-500`}>
          <p className={`text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-700'} mb-2`}>
            🎯 Suggested Action
          </p>
          <p className={`${isDark ? 'text-blue-200' : 'text-blue-800'}`}>
            Review {topic} concepts and practice fundamental problems
          </p>
        </div>

        <button className="mt-4 w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
          View Detailed Analysis →
        </button>
      </div>
    </div>
  );
};

export default DriftWarningPanel;
