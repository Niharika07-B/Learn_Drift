import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const TopicRadarChart = ({ data, isDark }) => {
  const chartData = data.map(topic => ({
    name: topic.name,
    accuracy: topic.accuracy,
    attempts: Math.min(topic.attempts, 100),
    avgTime: Math.min(topic.avgTime, 100),
  }));

  return (
    <div className={`rounded-2xl p-8 border ${
      isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
    } shadow-lg`}>
      <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        🎯 Topic Strength Radar
      </h3>

      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={chartData}>
          <PolarGrid stroke={isDark ? '#374151' : '#e5e7eb'} />
          <PolarAngleAxis 
            dataKey="name" 
            tick={{ fill: isDark ? '#9ca3af' : '#6b7280', fontSize: 12 }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]}
            tick={{ fill: isDark ? '#9ca3af' : '#6b7280', fontSize: 12 }}
          />
          <Radar 
            name="Accuracy" 
            dataKey="accuracy" 
            stroke="#8b5cf6" 
            fill="#8b5cf6" 
            fillOpacity={0.6}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: isDark ? '#1f2937' : '#ffffff',
              border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
              borderRadius: '8px',
              color: isDark ? '#ffffff' : '#000000'
            }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
          />
        </RadarChart>
      </ResponsiveContainer>

      <div className={`mt-6 p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <span className="font-semibold">📈 Insight:</span> The radar chart shows your performance across different topics. Larger areas indicate stronger performance.
        </p>
      </div>
    </div>
  );
};

export default TopicRadarChart;
