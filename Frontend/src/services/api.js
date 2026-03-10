import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Student APIs
export const studentLogin = (credentials) => api.post('/login', credentials);
export const getStudentDashboard = (id) => api.get(`/student/dashboard/${id}`);
export const getStudentProgress = (id) => api.get(`/student/progress/${id}`);
export const getStudentRecommendations = (id) => api.get(`/student/recommendations/${id}`);
export const submitAnswer = (data) => api.post('/student/submit-answer', data);
export const getTopicPerformance = (id) => api.get(`/student/topics/${id}`);

// Instructor APIs
export const instructorLogin = (credentials) => api.post('/login', credentials);
export const getInstructorDashboard = () => api.get('/instructor/dashboard');
export const getAllStudents = () => api.get('/students');
export const getStudentAnalysis = (id) => api.get(`/student/${id}/analysis`);
export const getDriftAnalysis = () => api.get('/drift-analysis');
export const getAlerts = () => api.get('/alerts');

export default api;
