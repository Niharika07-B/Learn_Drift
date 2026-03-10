import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import Card from '../../components/common/Card';
import DriftChart from '../../components/charts/DriftChart';
import BarChart from '../../components/charts/BarChart';
import Loader from '../../components/common/Loader';
import { ThemeContext } from '../../context/ThemeContext';
import { mockInstructorDashboard } from '../../data/mockData';

const InstructorDashboard = () => {
  const userName = localStorage.getItem('userName') || 'Instructor';
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Using mock data for now
      setTimeout(() => {
        setDashboardData(mockInstructorDashboard);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setDashboardData(null);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={`min-h-screen ${isDark ? 'galaxy-bg' : 'bg-gradient-to-br from-purple-100 to-blue-100'}`}>
        <Navbar role="Instructor" userName={userName} />
        <div className="flex">
          <Sidebar role="instructor" />
          <main className="flex-1">
            <Loader />
          </main>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className={`min-h-screen ${isDark ? 'galaxy-bg' : 'bg-gradient-to-br from-purple-100 to-blue-100'}`}>
        <Navbar role="Instructor" userName={userName} />
        <div className="flex">
          <Sidebar role="instructor" />
          <main className="flex-1 p-6">
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-xl p-8 text-center`}>
              <p className={`${isDark ? 'text-white' : 'text-gray-900'} text-xl`}>Unable to load dashboard data.</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const driftTrendData = {
    labels: dashboardData?.driftTrend?.labels || [],
    datasets: [{
      label: 'Average Drift Score',
      data: dashboardData?.driftTrend?.data || [],
      borderColor: 'rgb(239, 68, 68)',
      backgroundColor: 'rgba(239, 68, 68, 0.5)',
    }],
  };

  const weakAreasData = {
    labels: dashboardData?.weakAreas?.labels || [],
    datasets: [{
      label: 'Students Struggling',
      data: dashboardData?.weakAreas?.data || [],
      backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6', '#10b981', '#8b5cf6'],
    }],
  };

  return (
    <div className={`min-h-screen ${isDark ? 'galaxy-bg' : 'bg-gradient-to-br from-purple-100 to-blue-100'}`}>
      <Navbar role="Instructor" userName={userName} />
      <div className="flex">
        <Sidebar role="instructor" />
        <main className="flex-1 p-6">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>Instructor Dashboard 👨‍🏫</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
            <Card title="Total Students" value={dashboardData?.totalStudents || 0} icon="👥" color="blue" />
            <Card title="Active Students" value={dashboardData?.activeStudents || 0} icon="✅" color="green" />
            <Card title="High Drift" value={dashboardData?.highDrift || 0} icon="⚠️" color="red" />
            <Card title="Total Alerts" value={dashboardData?.totalAlerts || 0} icon="🔔" color="yellow" />
            <Card title="Avg Drift Score" value={dashboardData?.avgDriftScore || '0.00'} icon="📊" color="purple" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <DriftChart data={driftTrendData} title="Drift Trend Over Time" />
            </div>
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <BarChart data={weakAreasData} title="Topic-wise Weak Areas" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Recent Alerts</h3>
              <div className="space-y-3">
                {dashboardData?.recentAlerts?.length > 0 ? (
                  dashboardData.recentAlerts.map((alert, index) => (
                    <div key={index} className={`p-4 rounded-lg border-l-4 ${
                      alert.level === 'High' 
                        ? isDark ? 'border-red-500 bg-red-900 bg-opacity-20' : 'border-red-500 bg-red-100'
                        : isDark ? 'border-yellow-500 bg-yellow-900 bg-opacity-20' : 'border-yellow-500 bg-yellow-100'
                    }`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{alert.student}</p>
                          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Topic: {alert.topic}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${isDark ? 'text-red-400' : 'text-red-600'}`}>{alert.score}</p>
                          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{alert.level} Risk</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-center py-4`}>No recent alerts</p>
                )}
              </div>
            </div>

            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Students Needing Attention</h3>
              <div className="space-y-3">
                {dashboardData?.studentsNeedingAttention?.length > 0 ? (
                  dashboardData.studentsNeedingAttention.map((student, index) => (
                    <div key={index} className={`flex justify-between items-center border-b ${isDark ? 'border-gray-600' : 'border-gray-300'} pb-3`}>
                      <div>
                        <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{student.name}</p>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Accuracy: {student.accuracy}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${isDark ? 'text-red-400' : 'text-red-600'}`}>Drift: {student.drift}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          student.status === 'High' 
                            ? isDark ? 'bg-red-600 text-white' : 'bg-red-500 text-white'
                            : isDark ? 'bg-yellow-600 text-white' : 'bg-yellow-500 text-white'
                        }`}>
                          {student.status}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-center py-4`}>All students performing well</p>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InstructorDashboard;
