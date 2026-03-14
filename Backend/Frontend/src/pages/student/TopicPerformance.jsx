import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import Loader from '../../components/common/Loader';
import { ThemeContext } from '../../context/ThemeContext';
import { mockTopics } from '../../data/mockData';

const TopicPerformance = () => {
  const userName = localStorage.getItem('userName') || 'Student';
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    fetchTopicPerformance();
  }, []);

  const fetchTopicPerformance = async () => {
    try {
      setTimeout(() => {
        setTopics(mockTopics || []);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error fetching topic performance:', error);
      setTopics([]);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={`min-h-screen ${isDark ? 'galaxy-bg' : 'bg-gradient-to-br from-purple-100 to-blue-100'}`}>
        <Navbar role="Student" userName={userName} />
        <div className="flex">
          <Sidebar role="student" />
          <main className="flex-1">
            <Loader />
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? 'galaxy-bg' : 'bg-gradient-to-br from-purple-100 to-blue-100'}`}>
      <Navbar role="Student" userName={userName} />
      <div className="flex">
        <Sidebar role="student" />
        <main className="flex-1 p-6">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>Topic Performance 📚</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.length > 0 ? (
              topics.map((topic, index) => (
                <div key={index} className={`${isDark ? 'glass-card' : 'bg-white'} rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:scale-105`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{topic.name}</h3>
                    <span className="text-2xl">{topic.trendIcon}</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Attempts</span>
                      <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{topic.attempts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Accuracy</span>
                      <span className={`font-semibold ${
                        topic.accuracy >= 80 ? isDark ? 'text-green-400' : 'text-green-600' : 
                        topic.accuracy >= 70 ? isDark ? 'text-yellow-400' : 'text-yellow-600' : 
                        isDark ? 'text-red-400' : 'text-red-600'
                      }`}>
                        {topic.accuracy}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Avg Time</span>
                      <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{topic.avgTime}</span>
                    </div>
                    <div className={`flex justify-between items-center pt-2 border-t ${isDark ? 'border-gray-600' : 'border-gray-300'}`}>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Trend</span>
                      <span className={`font-semibold px-3 py-1 rounded-full text-sm ${
                        topic.color === 'green' ? isDark ? 'bg-green-600 text-white' : 'bg-green-500 text-white' :
                        topic.color === 'blue' ? isDark ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white' :
                        isDark ? 'bg-red-600 text-white' : 'bg-red-500 text-white'
                      }`}>
                        {topic.trend}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={`col-span-3 text-center ${isDark ? 'text-gray-400' : 'text-gray-600'} py-12`}>
                No topic performance data available yet
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TopicPerformance;
