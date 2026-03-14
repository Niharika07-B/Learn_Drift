import React, { useContext } from 'react';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import { ThemeContext } from '../../context/ThemeContext';

const Alerts = () => {
  const userName = localStorage.getItem('userName') || 'Instructor';
  const { isDark } = useContext(ThemeContext);

  const alerts = [
    {
      student: 'Asha Kumar',
      topic: 'Recursion',
      drift: 0.89,
      alert: 'Repeated mistakes and increased solving time',
      action: 'Instructor review recommended',
      date: '2026-03-09',
      priority: 'High',
    },
    {
      student: 'Ravi Sharma',
      topic: 'Arrays',
      drift: 0.82,
      alert: 'Sudden decline in accuracy',
      action: 'One-on-one session suggested',
      date: '2026-03-09',
      priority: 'High',
    },
    {
      student: 'Priya Singh',
      topic: 'Trees',
      drift: 0.65,
      alert: 'Increased solving time and retry count',
      action: 'Additional practice materials needed',
      date: '2026-03-08',
      priority: 'Medium',
    },
    {
      student: 'Teja Reddy',
      topic: 'Loops',
      drift: 0.41,
      alert: 'More retries on basic problems',
      action: 'Review fundamental concepts',
      date: '2026-03-08',
      priority: 'Medium',
    },
    {
      student: 'Deepak Verma',
      topic: 'DBMS',
      drift: 0.58,
      alert: 'Lower accuracy in SQL queries',
      action: 'Practice SQL exercises',
      date: '2026-03-07',
      priority: 'Medium',
    },
  ];

  const getPriorityColor = (priority) => {
    return priority === 'High' 
      ? isDark ? 'border-red-500 bg-red-900 bg-opacity-20' : 'border-red-500 bg-red-50'
      : isDark ? 'border-yellow-500 bg-yellow-900 bg-opacity-20' : 'border-yellow-500 bg-yellow-50';
  };

  return (
    <div className={`min-h-screen ${isDark ? 'galaxy-bg' : 'bg-gradient-to-br from-purple-100 to-blue-100'}`}>
      <Navbar role="Instructor" userName={userName} />
      <div className="flex">
        <Sidebar role="instructor" />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Alerts</h2>
            <div className="flex space-x-2">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                isDark ? 'bg-red-900 bg-opacity-30 text-red-300' : 'bg-red-100 text-red-800'
              }`}>
                High: 2
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                isDark ? 'bg-yellow-900 bg-opacity-30 text-yellow-300' : 'bg-yellow-100 text-yellow-800'
              }`}>
                Medium: 3
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg p-6 border-l-4 ${getPriorityColor(alert.priority)}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{alert.student}</h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{alert.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    alert.priority === 'High' 
                      ? isDark ? 'bg-red-900 bg-opacity-50 text-red-300' : 'bg-red-200 text-red-800'
                      : isDark ? 'bg-yellow-900 bg-opacity-50 text-yellow-300' : 'bg-yellow-200 text-yellow-800'
                  }`}>
                    {alert.priority} Priority
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Topic</p>
                    <p className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>{alert.topic}</p>
                  </div>
                  <div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Drift Score</p>
                    <p className={`font-semibold text-lg ${isDark ? 'text-red-400' : 'text-red-600'}`}>{alert.drift}</p>
                  </div>
                </div>

                <div className="mb-3">
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Alert</p>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-900'}>{alert.alert}</p>
                </div>

                <div className={`rounded p-3 border-l-2 ${isDark ? 'bg-gray-800 border-blue-500' : 'bg-white border-blue-500'}`}>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Suggested Action</p>
                  <p className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>{alert.action}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Alerts;
