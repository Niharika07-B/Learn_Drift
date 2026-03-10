import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import LineChart from '../../components/charts/LineChart';
import BarChart from '../../components/charts/BarChart';
import { ThemeContext } from '../../context/ThemeContext';

const StudentDetail = () => {
  const { id } = useParams();
  const userName = localStorage.getItem('userName') || 'Instructor';
  const { isDark } = useContext(ThemeContext);

  const student = {
    id,
    name: 'Asha Kumar',
    email: 'asha@example.com',
    totalAttempts: 45,
    accuracy: 45,
    avgTime: '8.2 min',
    driftScore: 0.89,
    status: 'High Risk',
  };

  const accuracyTrend = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Accuracy %',
      data: [75, 68, 55, 45],
      borderColor: 'rgb(239, 68, 68)',
      backgroundColor: 'rgba(239, 68, 68, 0.5)',
    }],
  };

  const topicPerformance = {
    labels: ['Arrays', 'Strings', 'Trees', 'DBMS', 'OS'],
    datasets: [{
      label: 'Accuracy %',
      data: [45, 50, 38, 55, 48],
      backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6', '#10b981', '#8b5cf6'],
    }],
  };

  const alertHistory = [
    { date: '2026-03-09', topic: 'Recursion', drift: 0.89, action: 'Review recommended' },
    { date: '2026-03-07', topic: 'Arrays', drift: 0.82, action: 'Practice suggested' },
    { date: '2026-03-05', topic: 'Trees', drift: 0.75, action: 'Instructor notified' },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'galaxy-bg' : 'bg-gradient-to-br from-purple-100 to-blue-100'}`}>
      <Navbar role="Instructor" userName={userName} />
      <div className="flex">
        <Sidebar role="instructor" />
        <main className="flex-1 p-6">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>Student Details</h2>

          <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-lg shadow p-6 mb-6`}>
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                {student.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{student.name}</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{student.email}</p>
              </div>
              <div className="text-right">
                <span className={`px-4 py-2 rounded-full font-semibold ${
                  student.status === 'High Risk' 
                    ? isDark ? 'bg-red-900 bg-opacity-30 text-red-300' : 'bg-red-200 text-red-800'
                    : isDark ? 'bg-green-900 bg-opacity-30 text-green-300' : 'bg-green-200 text-green-800'
                }`}>
                  {student.status}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-lg shadow p-4`}>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Total Attempts</p>
              <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{student.totalAttempts}</p>
            </div>
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-lg shadow p-4`}>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Accuracy</p>
              <p className={`text-2xl font-bold ${isDark ? 'text-red-400' : 'text-red-600'}`}>{student.accuracy}%</p>
            </div>
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-lg shadow p-4`}>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Avg Time</p>
              <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{student.avgTime}</p>
            </div>
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-lg shadow p-4`}>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Drift Score</p>
              <p className={`text-2xl font-bold ${isDark ? 'text-red-400' : 'text-red-600'}`}>{student.driftScore}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-lg shadow p-6`}>
              <LineChart data={accuracyTrend} title="Accuracy Trend" />
            </div>
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-lg shadow p-6`}>
              <BarChart data={topicPerformance} title="Topic-wise Performance" />
            </div>
          </div>

          <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-lg shadow p-6`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Alert History</h3>
            <table className="min-w-full">
              <thead className={isDark ? 'bg-gray-800' : 'bg-gray-50'}>
                <tr>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase`}>Date</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase`}>Topic</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase`}>Drift Score</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase`}>Action</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDark ? 'divide-gray-700' : 'divide-gray-200'}`}>
                {alertHistory.map((alert, index) => (
                  <tr key={index}>
                    <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{alert.date}</td>
                    <td className={`px-6 py-4 whitespace-nowrap font-medium ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>{alert.topic}</td>
                    <td className={`px-6 py-4 whitespace-nowrap font-semibold ${isDark ? 'text-red-400' : 'text-red-600'}`}>{alert.drift}</td>
                    <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{alert.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDetail;
