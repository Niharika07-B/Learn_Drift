import React from 'react';

const AIRecommendationCard = ({ title, reason, action, priority, isDark }) => {
  const getPriorityColor = (p) => {
    switch(p) {
      case 'High': return isDark ? 'from-red-500 to-pink-500' : 'from-red-400 to-pink-400';
      case 'Medium': return isDark ? 'from-yellow-500 to-orange-500' : 'from-yellow-400 to-orange-400';
      default: return isDark ? 'from-blue-500 to-cyan-500' : 'from-blue-400 to-cyan-400';
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-xl p-6 border ${
      isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
    } shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
      {/* Gradient accent */}
      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${getPriorityColor(priority)}`} />

      <div className="flex items-start space-x-4">
        <div className="text-4xl">🤖</div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h4>
            <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getPriorityColor(priority)} text-white`}>
              {priority}
            </span>
          </div>

          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
            {reason}
          </p>

          <div className={`p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} mb-3`}>
            <p className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
              Suggested Practice
            </p>
            <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {action}
            </p>
          </div>

          <button className={`w-full py-2 px-3 rounded-lg font-semibold transition-all duration-300 ${
            isDark 
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
              : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white'
          }`}>
            Start Practice
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIRecommendationCard;
