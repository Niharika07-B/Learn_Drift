import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { isDark } = useContext(ThemeContext);

  const features = [
    {
      icon: '🎯',
      title: 'Real-time Analytics',
      description: 'Track student performance with AI-powered insights and drift detection',
    },
    {
      icon: '📊',
      title: 'Performance Tracking',
      description: 'Monitor progress across topics with detailed charts and metrics',
    },
    {
      icon: '🔔',
      title: 'Smart Alerts',
      description: 'Get notified when students need attention or show learning drift',
    },
    {
      icon: '💡',
      title: 'Personalized Recommendations',
      description: 'AI-driven suggestions to improve learning outcomes',
    },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'galaxy-bg' : 'light-bg'} overflow-hidden transition-theme`}>
      {/* Enhanced Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dark theme particles */}
        {isDark && (
          <>
            <div className="absolute w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{top: '10%', left: '15%', animationDelay: '0s'}}></div>
            <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{top: '70%', left: '85%', animationDelay: '1s'}}></div>
            <div className="absolute w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{top: '85%', left: '10%', animationDelay: '2s'}}></div>
            <div className="absolute w-2 h-2 bg-purple-300 rounded-full animate-ping" style={{top: '30%', left: '80%', animationDelay: '1.5s'}}></div>
            <div className="absolute w-2 h-2 bg-blue-300 rounded-full animate-ping" style={{top: '50%', left: '5%', animationDelay: '0.5s'}}></div>
            <div className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{top: '40%', left: '50%', animationDelay: '0.8s'}}></div>
            <div className="absolute w-3 h-3 bg-yellow-300 rounded-full animate-ping" style={{top: '60%', left: '70%', animationDelay: '1.2s'}}></div>
          </>
        )}
        
        {/* Light theme particles */}
        {!isDark && (
          <>
            <div className="absolute w-3 h-3 bg-purple-300 rounded-full animate-ping" style={{top: '10%', left: '15%', animationDelay: '0s'}}></div>
            <div className="absolute w-2 h-2 bg-blue-300 rounded-full animate-ping" style={{top: '70%', left: '85%', animationDelay: '1s'}}></div>
            <div className="absolute w-3 h-3 bg-pink-300 rounded-full animate-ping" style={{top: '85%', left: '10%', animationDelay: '2s'}}></div>
            <div className="absolute w-2 h-2 bg-purple-200 rounded-full animate-ping" style={{top: '30%', left: '80%', animationDelay: '1.5s'}}></div>
            <div className="absolute w-2 h-2 bg-blue-200 rounded-full animate-ping" style={{top: '50%', left: '5%', animationDelay: '0.5s'}}></div>
          </>
        )}
      </div>

      {/* Navbar */}
      <nav className={`relative z-10 px-6 py-4 transition-theme`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className={`p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg glow-purple`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className={`text-3xl font-bold gradient-text`}>
              LearnDrift
            </h1>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition transform hover:scale-105 glow"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16 fade-in">
          <div className="inline-block mb-6">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-50 animate-pulse`}></div>
              <div className="relative p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-2xl">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
          </div>
          
          <h1 className={`text-6xl md:text-7xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6 leading-tight`}>
            AI-Powered
            <br />
            <span className="gradient-text">
              Educational Analytics
            </span>
          </h1>
          
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-8 max-w-2xl mx-auto`}>
            Detect concept drift in student learning behavior with advanced AI algorithms. 
            Empower educators with real-time insights and personalized recommendations.
          </p>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 glow flex items-center space-x-2"
            >
              <span>Start Learning</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => navigate('/login')}
              className={`${isDark ? 'glass-card text-white' : 'glass-card-light text-gray-900'} px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105`}
            >
              For Instructors
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${isDark ? 'glass-card' : 'glass-card-light'} rounded-xl p-6 hover:shadow-2xl transition transform hover:scale-105 hover:-translate-y-2 card-hover`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>{feature.title}</h3>
              <p className={isDark ? 'text-gray-300 text-sm' : 'text-gray-700 text-sm'}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-20 ${isDark ? 'glass-card' : 'glass-card-light'} rounded-2xl p-12`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">
                98%
              </div>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Accuracy in Drift Detection</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">
                10K+
              </div>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Students Monitored</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">
                24/7
              </div>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Real-time Monitoring</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20 text-center">
          <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-12`}>How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${isDark ? 'glass-card' : 'glass-card-light'} rounded-xl p-8`}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                1
              </div>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>Students Take Quizzes</h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Students answer questions while the system tracks their behavior patterns</p>
            </div>
            <div className={`${isDark ? 'glass-card' : 'glass-card-light'} rounded-xl p-8`}>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                2
              </div>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>AI Analyzes Data</h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Machine learning algorithms detect concept drift and learning patterns</p>
            </div>
            <div className={`${isDark ? 'glass-card' : 'glass-card-light'} rounded-xl p-8`}>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                3
              </div>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>Get Insights</h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Receive actionable recommendations and alerts for intervention</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-20 ${isDark ? 'glass-card' : 'glass-card-light'} rounded-2xl p-12`}>
          <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Ready to Transform Learning?</h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-8`}>Join thousands of educators using AI to improve student outcomes</p>
          <button
            onClick={() => navigate('/login')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 glow"
          >
            Get Started Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className={`relative z-10 mt-20 border-t ${isDark ? 'border-gray-700' : 'border-purple-300'} border-opacity-30`}>
        <div className="container mx-auto px-6 py-8">
          <div className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <p>&copy; 2026 LearnDrift. All rights reserved.</p>
            <p className="mt-2 text-sm">Powered by AI • Built for Education</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
