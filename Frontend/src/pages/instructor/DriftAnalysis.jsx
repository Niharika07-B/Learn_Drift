import React, { useContext } from 'react';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import PieChart from '../../components/charts/PieChart';
import BarChart from '../../components/charts/BarChart';
import { ThemeContext } from '../../context/ThemeContext';

const DriftAnalysis = () => {
  const userName = localStorage.getItem('userName') || 'Instructor';
  const { isDark } = useContext(ThemeContext);

  const driftData = [
    { student: 'Asha', topic: 'Recursion', drift: 0.89, level: 'High', remark: 'Repeated mistakes' },
    { student: 'Ravi', topic: 'Arrays', drift: 0.82, level: 'High', remark: 'Sudden decline' },
    { student: 'Priya', topic: 'Trees', drift: 0.65, level: 'Medium', remark: 'Increased time' },
    { student: 'Teja', topic: 'Loops', drift: 0.41, level: 'Medium', remark: 'More retries' },
    { student: 'Deepak', topic: 'DBMS', drift: 0.58, level: 'Medium', remark: 'Lower accuracy' },
  ];

  const driftDistribution = {
    labels: ['High Drift', 'Medium Drift', 'Low Drift'],
    datasets: [{
      data: [18, 35, 103],
      backgroundColor: ['#ef4444', '#f59e0b', '#10b981'],
    }],
  };

  const topicDrift = {
    labels: ['Arrays', 'Strings', 'Trees', 'DBMS', 'OS'],
    datasets: [{
      label: 'Avg Drift Score',
      data: [0.65, 0.42, 0.78, 0.38, 0.52],
      backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6', '#10b981', '#8b5cf6'],
    }],
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'High': return isDark ? 'bg-red-900 bg-opacity-30 text-red-300' : 'bg-red-100 text-red-800';
      case 'Medium': return isDark ? 'bg-yellow-900 bg-opacity-30 text-yellow-300' : 'bg-yellow-100 text-yellow-800';
      case 'Low': return isDark ? 'bg-green-900 bg-opacity-30 text-green-300' : 'bg-green-100 text-green-800';
      default: return isDark ? 'bg-gray-900 bg-opacity-30 text-gray-300' : 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'galaxy-bg' : 'bg-gradient-to-br from-purple-100 to-blue-100'}`}>
      <Navbar role="Instructor" userName={userName} />
      <div className="flex">
        <Sidebar role="instructor" />
        <main className="flex-1 p-6">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>Drift Analysis</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-lg shadow p-6`}>
              <PieChart data={driftDistribution} title="Drift Score Distribution" />
            </div>
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-lg shadow p-6`}>
              <BarChart data={topicDrift} title="Topic-wise Drift Comparison" />
            </div>
          </div>

          <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-lg shadow overflow-hidden`}>
            <div className={`px-6 py-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Detailed Drift Analysis</h3>
            </div>
            <table className="min-w-full">
              <thead className={isDark ? 'bg-gray-800' : 'bg-gray-50'}>
                <tr>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase`}>Student</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase`}>Topic</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase`}>Drift Score</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase`}>Drift Level</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase`}>Remark</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDark ? 'divide-gray-700' : 'divide-gray-200'}`}>
                {driftData.map((item, index) => (
                  <tr key={index} className={isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}>
                    <td className={`px-6 py-4 whitespace-nowrap font-medium ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>{item.student}</td>
                    <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.topic}</td>
                    <td className={`px-6 py-4 whitespace-nowrap font-semibold ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                      {item.drift}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getLevelColor(item.level)}`}>
                        {item.level}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.remark}</td>
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

export default DriftAnalysis;
