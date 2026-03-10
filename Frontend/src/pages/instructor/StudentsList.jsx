import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import SearchBar from '../../components/common/SearchBar';
import { ThemeContext } from '../../context/ThemeContext';

const StudentsList = () => {
  const userName = localStorage.getItem('userName') || 'Instructor';
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { isDark } = useContext(ThemeContext);

  const students = [
    { id: 1, name: 'Asha Kumar', attempts: 45, accuracy: 45, avgTime: '8.2 min', drift: 0.89, status: 'High' },
    { id: 2, name: 'Ravi Sharma', attempts: 52, accuracy: 52, avgTime: '7.5 min', drift: 0.82, status: 'High' },
    { id: 3, name: 'Priya Singh', attempts: 48, accuracy: 68, avgTime: '6.8 min', drift: 0.65, status: 'Medium' },
    { id: 4, name: 'Teja Reddy', attempts: 50, accuracy: 72, avgTime: '6.2 min', drift: 0.41, status: 'Medium' },
    { id: 5, name: 'Amit Patel', attempts: 55, accuracy: 85, avgTime: '5.5 min', drift: 0.15, status: 'Normal' },
    { id: 6, name: 'Sneha Gupta', attempts: 60, accuracy: 88, avgTime: '5.2 min', drift: 0.12, status: 'Normal' },
    { id: 7, name: 'Kiran Rao', attempts: 42, accuracy: 78, avgTime: '6.0 min', drift: 0.28, status: 'Normal' },
    { id: 8, name: 'Deepak Verma', attempts: 38, accuracy: 65, avgTime: '7.0 min', drift: 0.58, status: 'Medium' },
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'High': return isDark ? 'bg-red-900 bg-opacity-30 text-red-300' : 'bg-red-100 text-red-800';
      case 'Medium': return isDark ? 'bg-yellow-900 bg-opacity-30 text-yellow-300' : 'bg-yellow-100 text-yellow-800';
      case 'Normal': return isDark ? 'bg-green-900 bg-opacity-30 text-green-300' : 'bg-green-100 text-green-800';
      default: return isDark ? 'bg-gray-900 bg-opacity-30 text-gray-300' : 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'galaxy-bg' : 'bg-gradient-to-br from-purple-100 to-blue-100'}`}>
      <Navbar role="Instructor" userName={userName} />
      <div className="flex">
        <Sidebar role="instructor" />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Students List</h2>
            <div className="w-96">
              <SearchBar
                placeholder="Search students..."
                value={searchTerm}
                onChange={setSearchTerm}
              />
            </div>
          </div>

          <div className={`${isDark ? 'glass-card' : 'bg-white'} rounded-lg shadow overflow-hidden`}>
            <table className="min-w-full">
              <thead className={isDark ? 'bg-gray-800' : 'bg-gray-50'}>
                <tr>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>
                    Student Name
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>
                    Total Attempts
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>
                    Accuracy
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>
                    Avg Time
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>
                    Drift Score
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>
                    Status
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDark ? 'divide-gray-700' : 'divide-gray-200'}`}>
                {filteredStudents.map((student) => (
                  <tr key={student.id} className={isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}>
                    <td className={`px-6 py-4 whitespace-nowrap font-medium ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>
                      {student.name}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {student.attempts}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`font-semibold ${
                        student.accuracy >= 80 ? isDark ? 'text-green-400' : 'text-green-600' :
                        student.accuracy >= 60 ? isDark ? 'text-yellow-400' : 'text-yellow-600' : 
                        isDark ? 'text-red-400' : 'text-red-600'
                      }`}>
                        {student.accuracy}%
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {student.avgTime}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap font-semibold ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                      {student.drift}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(student.status)}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => navigate(`/instructor/student/${student.id}`)}
                        className={`font-medium ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-900'}`}
                      >
                        View Details
                      </button>
                    </td>
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

export default StudentsList;
