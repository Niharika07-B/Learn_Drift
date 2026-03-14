import React from 'react';

const WeakTopicHeatmap = ({ topics, isDark }) => {
  const getHeatmapColor = (strength) => {
    if (strength >= 80) return 'from-green-500 to-emerald-600';
    if (strength >= 60) return 'from-yellow-500 to-orange-500';
    if (strength >= 40) return 'from-orange-500 to-red-500';
    return 'from-red-500 to-red-700';
  };

  const getStrengthLabel = (strength) => {
    if (strength >= 80) return 'Strong';
    if (strength >= 60) return 'Good';
    if (strength >= 40) return 'Weak';
    return 'Critical';
  };

  return (
    <div className={`rounded-2xl p-8 border ${
      isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
    } shadow-lg`}>
      <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        📊 Topic Strength Heatmap
      </h3>

      <div className="space-y-4">
        {topics.map((topic, index) => {
          const strength = topic.accuracy;
          const barLength = (strength / 100) * 100;

          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {topic.name}
                </span>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-bold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {strength}%
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    strength >= 80 ? 'bg-green-900 text-green-300' :
                    strength >= 60 ? 'bg-yellow-900 text-yellow-300' :
                    strength >= 40 ? 'bg-orange-900 text-orange-300' :
                    'bg-red-900 text-red-300'
                  }`}>
                    {getStrengthLabel(strength)}
                  </span>
                </div>
              </div>

              <div className={`w-full h-8 rounded-lg overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div
                  className={`h-full bg-gradient-to-r ${getHeatmapColor(strength)} transition-all duration-500 flex items-center justify-end pr-3`}
                  style={{ width: `${barLength}%` }}
                >
                  {barLength > 30 && (
                    <span className="text-white font-bold text-sm">
                      {strength}%
                    </span>
                  )}
                </div>
              </div>

              {strength < 60 && (
                <p className={`text-xs ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                  ⚠️ Needs improvement - Consider extra practice
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className={`mt-6 p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <span className="font-semibold">💡 Tip:</span> Focus on topics with lower strength scores to improve overall performance.
        </p>
      </div>
    </div>
  );
};

export default WeakTopicHeatmap;
