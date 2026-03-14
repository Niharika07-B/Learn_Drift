import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import LineChart from '../../components/charts/LineChart';
import BarChart from '../../components/charts/BarChart';
import PieChart from '../../components/charts/PieChart';
import Loader from '../../components/common/Loader';
import { ThemeContext } from '../../context/ThemeContext';
import { mockProgress } from '../../data/mockData';

const MyProgress = () => {
  const userName = localStorage.getItem('userName') || 'Student';
  const [period, setPeriod] = useState('7days');
  const [loading, setLoading] = useState(true);
  const [progressData, setProgressData] = useState(null);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    fetchProgressData();
  }, [period]);

  const fetchProgressData = async () => {
    setLoading(true);
    try {
      setTimeout(() => {
        setProgressData(mockProgress);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error fetching progress data:', error);
      setProgressData(null);
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

  const accuracyData = {
    labels: progressData?.accuracyOverTime?.labels || [],
    datasets: [{
      label: 'Accuracy %',
      data: progressData?.accuracyOverTime?.data || [],
      borderColor: 'rgb(139, 92, 246)',
      backgroundColor: 'rgba(139, 92, 246, 0.5)',
    }],
  };

  const topicScores = {
    labels: progressData?.topicScores?.labels || [],
    datasets: [{
      label: 'Score %',
      data: progressData?.topicScores?.data || [],
      backgroundColor: ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
    }],
  };

  const correctIncorrect = {
    labels: ['Correct', 'Incorrect'],
    datasets: [{
      data: [progressData?.correct || 0, progressData?.incorrect || 0],
      backgroundColor: ['#10b981', '#ef4444'],
    }],
  };

  if (!progressData) {
    return (
      <div className={`min-h-screen ${isDark ? 'galaxy-bg' : 'bg-gradient-to-br from-purple-100 to-blue-100'}`}>
        <Navbar role="Student" userName={userName} />
        <div className="flex">
          <Sidebar role="student" />
          <main className="flex-1 p-6">
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-xl p-8 text-center`}>
              <p className={`${isDark ? 'text-white' : 'text-gray-900'} text-xl`}>Unable to load progress data.</p>
            </div>
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
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>My Progress 📈</h2>
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className={`px-4 py-2 ${isDark ? 'bg-white bg-opacity-10 border-gray-400 border-opacity-30 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
            >
              <option value="7days" className={isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}>Last 7 Days</option>
              <option value="30days" className={isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}>Last 30 Days</option>
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <LineChart data={accuracyData} title="Accuracy Over Time" />
            </div>
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <BarChart data={topicScores} title="Topic-wise Scores" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <PieChart data={correctIncorrect} title="Correct vs Incorrect" />
            </div>
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Summary Statistics</h3>
              <div className="space-y-4">
                <div className={`flex justify-between border-b ${isDark ? 'border-gray-600' : 'border-gray-300'} pb-2`}>
                  <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Total Questions Attempted</span>
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{progressData.totalAttempts}</span>
                </div>
                <div className={`flex justify-between border-b ${isDark ? 'border-gray-600' : 'border-gray-300'} pb-2`}>
                  <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Correct Answers</span>
                  <span className={`font-semibold ${isDark ? 'text-green-400' : 'text-green-600'}`}>{progressData.correct}</span>
                </div>
                <div className={`flex justify-between border-b ${isDark ? 'border-gray-600' : 'border-gray-300'} pb-2`}>
                  <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Incorrect Answers</span>
                  <span className={`font-semibold ${isDark ? 'text-red-400' : 'text-red-600'}`}>{progressData.incorrect}</span>
                </div>
                <div className={`flex justify-between border-b ${isDark ? 'border-gray-600' : 'border-gray-300'} pb-2`}>
                  <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Overall Accuracy</span>
                  <span className={`font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{progressData.accuracy}%</span>
                </div>
                <div className="flex justify-between">
                  <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Average Time per Question</span>
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{progressData.avgTime}</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyProgress;
