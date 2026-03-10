import React from 'react';

const LearningHealthScore = ({ accuracy, solvingTime, retries, consistency }) => {
  // Calculate health score (0-100)
  const healthScore = Math.round(
    (accuracy * 0.4) + 
    (Math.max(0, 100 - (solvingTime / 10)) * 0.2) + 
    (Math.max(0, 100 - (retries * 5)) * 0.2) + 
    (consistency * 0.2)
  );

  const getHealthStatus = (score) => {
    if (score >= 80) return { status: 'Excellent', color: 'from-green-400 to-emerald-500', icon: '🟢' };
    if (score >= 60) return { status: 'Good', color: 'from-blue-400 to-cyan-500', icon: '🔵' };
    if (score >= 40) return { status: 'Warning', color: 'from-yellow-400 to-orange-500', icon: '🟡' };
    return { status: 'Drift Detected', color: 'from-red-400 to-pink-500', icon: '🔴' };
  };

  const health = getHealthStatus(healthScore);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">Learning Health Score</h3>
        <span className="text-4xl">{health.icon}</span>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div>
          <div className={`text-6xl font-bold bg-gradient-to-r ${health.color} bg-clip-text text-transparent`}>
            {healthScore}
          </div>
          <p className="text-gray-400 text-sm mt-2">out of 100</p>
        </div>
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#374151" strokeWidth="8" />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={`url(#gradient-${healthScore})`}
              strokeWidth="8"
              strokeDasharray={`${(healthScore / 100) * 283} 283`}
              className="transition-all duration-500"
            />
            <defs>
              <linearGradient id={`gradient-${healthScore}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={health.color.split(' ')[1]} />
                <stop offset="100%" stopColor={health.color.split(' ')[3]} />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{healthScore}%</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
          <span className="text-gray-300">Status</span>
          <span className={`font-semibold bg-gradient-to-r ${health.color} bg-clip-text text-transparent`}>
            {health.status}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-gray-800 rounded-lg">
            <p className="text-gray-400 text-xs">Accuracy</p>
            <p className="text-white font-bold text-lg">{accuracy}%</p>
          </div>
          <div className="p-3 bg-gray-800 rounded-lg">
            <p className="text-gray-400 text-xs">Consistency</p>
            <p className="text-white font-bold text-lg">{consistency}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningHealthScore;
