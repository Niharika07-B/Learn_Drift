import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/common/HomePage';
import Login from '../pages/common/Login';
import StudentDashboard from '../pages/student/StudentDashboard';
import QuizPage from '../pages/student/QuizPage';
import MyProgress from '../pages/student/MyProgress';
import TopicPerformance from '../pages/student/TopicPerformance';
import Recommendations from '../pages/student/Recommendations';
import InstructorDashboard from '../pages/instructor/InstructorDashboard';
import StudentsList from '../pages/instructor/StudentsList';
import StudentDetail from '../pages/instructor/StudentDetail';
import DriftAnalysis from '../pages/instructor/DriftAnalysis';
import Alerts from '../pages/instructor/Alerts';
import Reports from '../pages/instructor/Reports';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      
      {/* Student Routes */}
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/student/quiz" element={<QuizPage />} />
      <Route path="/student/progress" element={<MyProgress />} />
      <Route path="/student/topics" element={<TopicPerformance />} />
      <Route path="/student/recommendations" element={<Recommendations />} />
      
      {/* Instructor Routes */}
      <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
      <Route path="/instructor/students" element={<StudentsList />} />
      <Route path="/instructor/student/:id" element={<StudentDetail />} />
      <Route path="/instructor/drift" element={<DriftAnalysis />} />
      <Route path="/instructor/alerts" element={<Alerts />} />
      <Route path="/instructor/reports" element={<Reports />} />
    </Routes>
  );
};

export default AppRoutes;
