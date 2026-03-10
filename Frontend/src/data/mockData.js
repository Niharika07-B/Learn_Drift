// Mock data for frontend development
// This will be replaced with real backend data later

export const mockStudents = [
  {
    id: 1,
    name: 'Asha Kumar',
    email: 'asha@example.com',
    attempts: 45,
    accuracy: 45,
    avgTime: '8.2 min',
    drift: 0.89,
    status: 'High',
  },
  {
    id: 2,
    name: 'Ravi Sharma',
    email: 'ravi@example.com',
    attempts: 52,
    accuracy: 52,
    avgTime: '7.5 min',
    drift: 0.82,
    status: 'High',
  },
  {
    id: 3,
    name: 'Priya Singh',
    email: 'priya@example.com',
    attempts: 48,
    accuracy: 68,
    avgTime: '6.8 min',
    drift: 0.65,
    status: 'Medium',
  },
  {
    id: 4,
    name: 'Teja Reddy',
    email: 'teja@example.com',
    attempts: 50,
    accuracy: 72,
    avgTime: '6.2 min',
    drift: 0.41,
    status: 'Medium',
  },
  {
    id: 5,
    name: 'Amit Patel',
    email: 'amit@example.com',
    attempts: 55,
    accuracy: 85,
    avgTime: '5.5 min',
    drift: 0.15,
    status: 'Normal',
  },
];

export const mockStudentDashboard = {
  totalQuizzes: 24,
  avgAccuracy: 75,
  avgTime: '6.2 min',
  weakTopic: 'Trees',
  accuracyTrend: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: [65, 70, 68, 75, 72, 78, 80],
  },
  topicPerformance: {
    labels: ['Arrays', 'Strings', 'Trees', 'DBMS', 'OS'],
    data: [85, 70, 65, 80, 75],
  },
  recentActivity: [
    { quiz: 'Arrays Quiz 1', score: '8/10', time: '5 mins', date: '2026-03-09' },
    { quiz: 'Strings Quiz 2', score: '7/10', time: '6 mins', date: '2026-03-08' },
    { quiz: 'Trees Quiz 1', score: '6/10', time: '8 mins', date: '2026-03-07' },
  ],
  recommendations: [
    {
      title: 'Practice Trees',
      description: 'Your accuracy dropped in tree problems',
      color: 'from-yellow-500 to-yellow-600',
      borderColor: 'yellow-500',
    },
    {
      title: 'Great Progress in Arrays!',
      description: 'Keep up the good work',
      color: 'from-blue-500 to-blue-600',
      borderColor: 'blue-500',
    },
  ],
};

export const mockInstructorDashboard = {
  totalStudents: 156,
  activeStudents: 142,
  highDrift: 18,
  totalAlerts: 34,
  avgDriftScore: '0.42',
  driftTrend: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    data: [0.35, 0.42, 0.38, 0.45],
  },
  weakAreas: {
    labels: ['Arrays', 'Strings', 'Trees', 'DBMS', 'OS'],
    data: [12, 8, 15, 6, 10],
  },
  recentAlerts: [
    { student: 'Asha', topic: 'Recursion', score: 0.89, level: 'High' },
    { student: 'Ravi', topic: 'Arrays', score: 0.82, level: 'High' },
    { student: 'Teja', topic: 'Loops', score: 0.41, level: 'Medium' },
  ],
  studentsNeedingAttention: [
    { name: 'Asha', accuracy: '45%', drift: 0.89, status: 'High' },
    { name: 'Ravi', accuracy: '52%', drift: 0.82, status: 'High' },
    { name: 'Priya', accuracy: '68%', drift: 0.65, status: 'Medium' },
  ],
};

export const mockTopics = [
  {
    name: 'Arrays',
    attempts: 45,
    accuracy: 85,
    avgTime: '5.2 min',
    trend: 'Improving',
    trendIcon: '📈',
    color: 'green',
  },
  {
    name: 'Strings',
    attempts: 38,
    accuracy: 70,
    avgTime: '6.1 min',
    trend: 'Stable',
    trendIcon: '➡️',
    color: 'blue',
  },
  {
    name: 'Trees',
    attempts: 32,
    accuracy: 65,
    avgTime: '8.3 min',
    trend: 'Declining',
    trendIcon: '📉',
    color: 'red',
  },
  {
    name: 'DBMS',
    attempts: 40,
    accuracy: 80,
    avgTime: '5.8 min',
    trend: 'Improving',
    trendIcon: '📈',
    color: 'green',
  },
  {
    name: 'Operating Systems',
    attempts: 35,
    accuracy: 75,
    avgTime: '6.5 min',
    trend: 'Stable',
    trendIcon: '➡️',
    color: 'blue',
  },
];

export const mockRecommendations = [
  {
    type: 'Practice',
    title: 'Practice more on Graphs',
    description: 'Your accuracy in graph problems is below average. Focus on BFS and DFS algorithms.',
    priority: 'High',
    icon: '📚',
  },
  {
    type: 'Speed',
    title: 'Your solving time increased in Recursion',
    description: 'Try to solve recursion problems faster. Practice more basic recursion patterns.',
    priority: 'Medium',
    icon: '⏱️',
  },
  {
    type: 'Retry',
    title: 'Retry Logic questions',
    description: 'You have high retry counts in logic problems. Review fundamental concepts.',
    priority: 'Medium',
    icon: '🔄',
  },
  {
    type: 'Accuracy',
    title: 'Focus on accuracy in Arrays',
    description: 'Your speed is good but accuracy needs improvement. Take time to understand problems.',
    priority: 'Low',
    icon: '🎯',
  },
  {
    type: 'Improvement',
    title: 'Great progress in Strings!',
    description: 'Keep up the excellent work. Your accuracy and speed both improved.',
    priority: 'Info',
    icon: '🌟',
  },
];

export const mockProgress = {
  accuracyOverTime: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: [65, 70, 68, 75, 72, 78, 80],
  },
  topicScores: {
    labels: ['Arrays', 'Strings', 'Trees', 'DBMS', 'OS'],
    data: [85, 70, 65, 80, 75],
  },
  correct: 156,
  incorrect: 44,
  totalAttempts: 200,
  accuracy: 78,
  avgTime: '6.2 min',
};
