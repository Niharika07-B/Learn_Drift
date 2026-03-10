import React, { useContext } from 'react';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import { ThemeContext } from '../../context/ThemeContext';

const Reports = () => {
  const userName = localStorage.getItem('userName') || 'Instructor';
  const { isDark } = useContext(ThemeContext);

  const reports = [
    {
      title: 'Student Performance Report',
      description: 'Comprehensive report of all students performance metrics',
      icon: '📊',
      lastGenerated: '2026-03-09',
    },
    {
      title: 'Topic Drift Report',
      description: 'Analysis of drift scores across different topics',
      icon: '📉',
      lastGenerated: '2026-03-09',
    },
    {
      title: 'Weekly Alerts Report',
      description: 'Summary of all alerts generated this week',
      icon: '🔔',
      lastGenerated: '2026-03-08',
    },
    {
      title: 'Student Engagement Report',
      description: 'Track student activity and engagement levels',
      icon: '📈',
      lastGenerated: '2026-03-07',
    },
  ];

  const handleExportCSV = (reportTitle) => {
    console.log(`Exporting ${reportTitle} as CSV`);
    alert(`${reportTitle} exported as CSV`);
  };

  const handleExportPDF = (reportTitle) => {
    console.log(`Exporting ${reportTitle} as PDF`);
    alert(`${reportTitle} exported as PDF`);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'galaxy-bg' : 'bg-gradient-to-br from-purple-100 to-blue-100'}`}>
      <Navbar role="Instructor" userName={userName} />
      <div className="flex">
        <Sidebar role="instructor" />
        <main className="flex-1 p-6">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>Reports</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reports.map((report, index) => (
              <div key={index} className={`${isDark ? 'glass-card' : 'bg-white'} rounded-lg shadow-lg p-6 hover:shadow-xl transition`}>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-5xl">{report.icon}</div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>{report.title}</h3>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mb-2`}>{report.description}</p>
                    <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Last generated: {report.lastGenerated}</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => handleExportCSV(report.title)}
                    className={`flex-1 ${isDark ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'} text-white px-4 py-2 rounded-lg font-semibold transition`}
                  >
                    📄 Export CSV
                  </button>
                  <button
                    onClick={() => handleExportPDF(report.title)}
                    className={`flex-1 ${isDark ? 'bg-red-700 hover:bg-red-600' : 'bg-red-600 hover:bg-red-700'} text-white px-4 py-2 rounded-lg font-semibold transition`}
                  >
                    📑 Export PDF
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-8 ${isDark ? 'glass-card' : 'bg-white'} rounded-lg shadow p-6`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Custom Report Generator</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Report Type</label>
                <select className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                }`}>
                  <option>Student Performance</option>
                  <option>Drift Analysis</option>
                  <option>Topic Analysis</option>
                  <option>Alert Summary</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Time Period</label>
                <select className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                }`}>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 3 Months</option>
                  <option>Custom Range</option>
                </select>
              </div>
            </div>
            <button className={`${isDark ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-6 py-2 rounded-lg font-semibold`}>
              Generate Custom Report
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Reports;
