import React, { useState, useEffect } from 'react';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';

const QuizPage = () => {
  const userName = localStorage.getItem('userName') || 'Student';
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [timer, setTimer] = useState(0);
  const [retryCount, setRetryCount] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const questions = [
    {
      id: 101,
      question: 'What is the time complexity of binary search?',
      options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
      correct: 'O(log n)',
      topic: 'Arrays',
    },
    {
      id: 102,
      question: 'Which data structure uses LIFO?',
      options: ['Queue', 'Stack', 'Tree', 'Graph'],
      correct: 'Stack',
      topic: 'Data Structures',
    },
    {
      id: 103,
      question: 'What does SQL stand for?',
      options: ['Structured Query Language', 'Simple Query Language', 'Standard Query Language', 'System Query Language'],
      correct: 'Structured Query Language',
      topic: 'DBMS',
    },
  ];

  useEffect(() => {
    let interval;
    if (quizStarted) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizStarted]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setTimer(0);
  };

  const handleSubmit = () => {
    const question = questions[currentQuestion];
    const isCorrect = selectedAnswer === question.correct;

    // Prepare data to send to backend
    const interactionData = {
      studentId: localStorage.getItem('userId'),
      questionId: question.id,
      answer: selectedAnswer,
      isCorrect,
      timeTaken: timer,
      retryCount,
      timestamp: new Date().toISOString(),
    };

    console.log('Submitting:', interactionData);
    // In production: submitAnswer(interactionData);

    if (!isCorrect) {
      setRetryCount(retryCount + 1);
      alert('Incorrect! Try again.');
    } else {
      alert('Correct!');
      handleNext();
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setTimer(0);
      setRetryCount(0);
    } else {
      alert('Quiz completed!');
      setQuizStarted(false);
      setCurrentQuestion(0);
    }
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar role="Student" userName={userName} />
        <div className="flex">
          <Sidebar role="student" />
          <main className="flex-1 p-6 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Quiz?</h2>
              <p className="text-gray-600 mb-6">This quiz contains {questions.length} questions</p>
              <button
                onClick={handleStartQuiz}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
              >
                Start Quiz
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar role="Student" userName={userName} />
      <div className="flex">
        <Sidebar role="student" />
        <main className="flex-1 p-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-semibold text-gray-600">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <div className="flex space-x-4">
                  <span className="text-sm font-semibold text-blue-600">⏱️ {timer}s</span>
                  <span className="text-sm font-semibold text-red-600">🔄 Retries: {retryCount}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6">{question.question}</h3>

              <div className="space-y-3 mb-6">
                {question.options.map((option, index) => (
                  <label
                    key={index}
                    className={`block p-4 border-2 rounded-lg cursor-pointer transition ${
                      selectedAnswer === option
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      checked={selectedAnswer === option}
                      onChange={(e) => setSelectedAnswer(e.target.value)}
                      className="mr-3"
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handleSubmit}
                  disabled={!selectedAnswer}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold disabled:bg-gray-400"
                >
                  Submit Answer
                </button>
                <button
                  onClick={handleNext}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold"
                >
                  Skip
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default QuizPage;
