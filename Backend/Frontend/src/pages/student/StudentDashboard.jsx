import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import Card from '../../components/common/Card';
import LineChart from '../../components/charts/LineChart';
import BarChart from '../../components/charts/BarChart';
import Loader from '../../components/common/Loader';
import { ThemeContext } from '../../context/ThemeContext';
import { mockStudentDashboard } from '../../data/mockData';
import LearningHealthScore from '../../components/features/LearningHealthScore';
import DriftWarningPanel from '../../components/features/DriftWarningPanel';
import AIRecommendationCard from '../../components/features/AIRecommendationCard';
import WeakTopicHeatmap from '../../components/features/WeakTopicHeatmap';
import LearningStreak from '../../components/features/LearningStreak';

const StudentDashboard = () => {
  const userName = localStorage.getItem('userName') || 'Student';
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
        setDashboardData(mockStudentDashboard);
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

  if (!dashboardData) {
    return (
      <div className={`min-h-screen ${isDark ? 'galaxy-bg' : 'bg-gradient-to-br from-purple-100 to-blue-100'}`}>
        <Navbar role="Student" userName={userName} />
        <div className="flex">
          <Sidebar role="student" />
          <main className="flex-1 p-6">
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-xl p-8 text-center`}>
              <p className={`${isDark ? 'text-white' : 'text-gray-900'} text-xl`}>Unable to load dashboard data.</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const accuracyData = {
    labels: dashboardData.accuracyTrend?.labels || [],
    datasets: [{
      label: 'Accuracy %',
      data: dashboardData.accuracyTrend?.data || [],
      borderColor: 'rgb(139, 92, 246)',
      backgroundColor: 'rgba(139, 92, 246, 0.5)',
    }],
  };

  const topicData = {
    labels: dashboardData.topicPerformance?.labels || [],
    datasets: [{
      label: 'Score %',
      data: dashboardData.topicPerformance?.data || [],
      backgroundColor: ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
    }],
  };

  return (
    <div className={`min-h-screen ${isDark ? 'galaxy-bg' : 'bg-gradient-to-br from-purple-100 to-blue-100'}`}>
      <Navbar role="Student" userName={userName} />
      <div className="flex">
        <Sidebar role="student" />
        <main className="flex-1 p-6">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-8`}>Welcome, {userName}! 🎓</h2>
          
          {/* Row 1: Learning Health Score & Drift Warning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <LearningHealthScore 
              accuracy={dashboardData.avgAccuracy}
              solvingTime={6.2}
              retries={2}
              consistency={85}
            />
            <DriftWarningPanel 
              topic="Trees"
              accuracyDrop={35}
              timeIncrease={40}
              isDark={isDark}
            />
          </div>

          {/* Row 2: Learning Streak & Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <LearningStreak 
              streakDays={5}
              longestStreak={12}
              isDark={isDark}
            />
            <div className="grid grid-cols-2 gap-4">
              <Card 
                title="Total Quizzes" 
                value={dashboardData.totalQuizzes} 
                icon="📝" 
                color="blue" 
              />
              <Card 
                title="Average Accuracy" 
                value={`${dashboardData.avgAccuracy}%`} 
                icon="🎯" 
                color="green" 
              />
              <Card 
                title="Avg Solving Time" 
                value={dashboardData.avgTime} 
                icon="⏱️" 
                color="yellow" 
              />
              <Card 
                title="Weak Topic" 
                value={dashboardData.weakTopic} 
                icon="📚" 
                color="red" 
              />
            </div>
          </div>

          {/* Row 3: Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <LineChart data={accuracyData} title="Accuracy Trend (Last 7 Days)" />
            </div>
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <BarChart data={topicData} title="Topic Performance" />
            </div>
          </div>

          {/* Row 4: Weak Topic Heatmap */}
          <div className="mb-6">
            <WeakTopicHeatmap 
              topics={[
                { name: 'Arrays', accuracy: 85 },
                { name: 'Strings', accuracy: 70 },
                { name: 'Trees', accuracy: 65 },
                { name: 'DBMS', accuracy: 80 },
                { name: 'OS', accuracy: 75 },
              ]}
              isDark={isDark}
            />
          </div>

          {/* Row 5: AI Recommendations */}
          <div className="mb-6">
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>🤖 AI Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AIRecommendationCard 
                title="Practice Trees"
                reason="Your accuracy dropped from 75% → 62% in the last 3 quizzes"
                action="Trees Basics Quiz"
                priority="High"
                isDark={isDark}
              />
              <AIRecommendationCard 
                title="Speed Training"
                reason="Your solving time increased by 40% in Recursion problems"
                action="Recursion Speed Drills"
                priority="Medium"
                isDark={isDark}
              />
              <AIRecommendationCard 
                title="Consistency Boost"
                reason="You're performing well! Maintain your streak"
                action="Daily Challenge Quiz"
                priority="Low"
                isDark={isDark}
              />
            </div>
          </div>

          {/* Row 6: Recent Activity & Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Recent Quiz Activity</h3>
              <div className="space-y-3">
                {dashboardData.recentActivity?.length > 0 ? (
                  dashboardData.recentActivity.map((activity, index) => (
                    <div key={index} className={`flex justify-between items-center border-b ${isDark ? 'border-gray-600' : 'border-gray-300'} pb-2`}>
                      <div>
                        <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{activity.quiz}</p>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{activity.date}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{activity.score}</p>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{activity.time}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-center py-4`}>No recent activity</p>
                )}
              </div>
            </div>

            <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-xl shadow-lg p-6`}>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Learning Insights</h3>
              <div className="space-y-3">
                {dashboardData.recommendations?.length > 0 ? (
                  dashboardData.recommendations.map((rec, index) => (
                    <div key={index} className={`bg-gradient-to-r ${rec.color} bg-opacity-20 border-l-4 border-${rec.borderColor} p-3 rounded`}>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{rec.title}</p>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{rec.description}</p>
                    </div>
                  ))
                ) : (
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-center py-4`}>No insights yet</p>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
