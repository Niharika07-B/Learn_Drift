import React from 'react';

const LearningStreak = ({ streakDays, longestStreak, isDark }) => {
  const getStreakColor = (days) => {
    if (days >= 7) return 'from-red-500 to-orange-500';
    if (days >= 5) return 'from-orange-500 to-yellow-500';
    if (days >= 3) return 'from-yellow-500 to-green-500';
    return 'from-blue-500 to-cyan-500';
  };

  return (
    <div className={`rounded-2xl p-8 border ${
      isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
    } shadow-lg`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          🔥 Learning Streak
        </h3>
        <span className="text-4xl animate-bounce">🔥</span>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Current Streak */}
        <div className={`p-6 rounded-xl border-2 ${
          isDark ? 'border-orange-500 bg-orange-900 bg-opacity-20' : 'border-orange-400 bg-orange-50'
        }`}>
          <p className={`text-sm font-semibold ${isDark ? 'text-orange-300' : 'text-orange-700'} mb-2`}>
            Current Streak
          </p>
          <div className={`text-5xl font-bold bg-gradient-to-r ${getStreakColor(streakDays)} bg-clip-text text-transparent`}>
            {streakDays}
          </div>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
            days in a row
          </p>
        </div>

        {/* Longest Streak */}
        <div className={`p-6 rounded-xl border-2 ${
          isDark ? 'border-purple-500 bg-purple-900 bg-opacity-20' : 'border-purple-400 bg-purple-50'
        }`}>
          <p className={`text-sm font-semibold ${isDark ? 'text-purple-300' : 'text-purple-700'} mb-2`}>
            Longest Streak
          </p>
          <div className={`text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent`}>
            {longestStreak}
          </div>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
            personal best
          </p>
        </div>
      </div>

      {/* Streak Calendar */}
      <div className="mb-6">
        <p className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
          This Week
        </p>
        <div className="grid grid-cols-7 gap-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={day} className="text-center">
              <p className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                {day}
              </p>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                index < streakDays
                  ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white'
                  : isDark ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
              }`}>
                {index < streakDays ? '✓' : '-'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Motivation Message */}
      <div className={`p-4 rounded-lg ${isDark ? 'bg-green-900 bg-opacity-30 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
        <p className={`text-sm font-semibold ${isDark ? 'text-green-300' : 'text-green-700'}`}>
          {streakDays >= 7 
            ? '🏆 Amazing! You\'re on fire! Keep it up!' 
            : streakDays >= 3 
            ? '💪 Great consistency! You\'re building momentum!' 
            : '🚀 Start your streak today!'}
        </p>
      </div>
    </div>
  );
};

export default LearningStreak;
