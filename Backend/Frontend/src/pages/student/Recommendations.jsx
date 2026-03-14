import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import Loader from '../../components/common/Loader';
import { ThemeContext } from '../../context/ThemeContext';
import { mockRecommendations } from '../../data/mockData';

const Recommendations = () => {
  const userName = localStorage.getItem('userName') || 'Student';
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    try {
      setTimeout(() => {
        setRecommendations(mockRecommendations || []);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setRecommendations([]);
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

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return isDark ? 'border-red-500 bg-red-900 bg-opacity-20' : 'border-red-500 bg-red-100';
      case 'Medium': return isDark ? 'border-yellow-500 bg-yellow-900 bg-opacity-20' : 'border-yellow-500 bg-yellow-100';
      case 'Low': return isDark ? 'border-blue-500 bg-blue-900 bg-opacity-20' : 'border-blue-500 bg-blue-100';
      case 'Info': return isDark ? 'border-green-500 bg-green-900 bg-opacity-20' : 'border-green-500 bg-green-100';
      default: return isDark ? 'border-gray-500 bg-gray-900 bg-opacity-20' : 'border-gray-500 bg-gray-100';
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'galaxy-bg' : 'bg-gradient-to-br from-purple-100 to-blue-100'}`}>
      <Navbar role="Student" userName={userName} />
      <div className="flex">
        <Sidebar role="student" />
        <main className="flex-1 p-6">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>Recommendations 💡</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.length > 0 ? (
              recommendations.map((rec, index) => (
                <div
                  key={index}
                  className={`rounded-xl shadow-lg p-6 border-l-4 ${getPriorityColor(rec.priority)} hover:shadow-2xl transition transform hover:scale-105`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{rec.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{rec.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                          rec.priority === 'High' ? isDark ? 'bg-red-600 text-white' : 'bg-red-500 text-white' :
                          rec.priority === 'Medium' ? isDark ? 'bg-yellow-600 text-white' : 'bg-yellow-500 text-white' :
                          rec.priority === 'Low' ? isDark ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white' :
                          isDark ? 'bg-green-600 text-white' : 'bg-green-500 text-white'
                        }`}>
                          {rec.priority}
                        </span>
                      </div>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm`}>{rec.description}</p>
                      <div className="mt-3">
                        <span className={`text-xs ${isDark ? 'bg-white bg-opacity-10 text-gray-300' : 'bg-gray-200 text-gray-700'} px-2 py-1 rounded`}>
                          {rec.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={`col-span-2 text-center ${isDark ? 'text-gray-400' : 'text-gray-600'} py-12`}>
                No recommendations available yet. Keep practicing!
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Recommendations;
