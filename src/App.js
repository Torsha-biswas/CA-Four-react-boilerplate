import React, { useState } from 'react';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';
import questions from './questions';
import './App.css';

function App() {
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleQuizEnd = (finalScore) => {
    setScore(finalScore);
    setIsQuizCompleted(true);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const restartQuiz = () => {
    setScore(0);
    setIsQuizCompleted(false);
  };

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <button onClick={toggleDarkMode} className="mode-toggle-button">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {isQuizCompleted ? (
        <Result 
          score={score} 
          totalQuestions={questions.length} 
          onRestart={restartQuiz} 
          onToggleMode={toggleDarkMode} 
          darkMode={darkMode} 
        />
      ) : (
        <QuestionBox onQuizEnd={handleQuizEnd} darkMode={darkMode} />
      )}
    </div>
  );
}

export default App;
