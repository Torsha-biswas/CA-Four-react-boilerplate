import React from 'react';
import './Result.css';

export default function Result({ score, totalQuestions, onRestart, onToggleMode, darkMode }) {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="result-container">
      <h2>Your Score</h2>
      <p>{score} out of {totalQuestions} correct</p>
      <p>Percentage: {percentage.toFixed(2)}%</p>
      <button onClick={onRestart} className="restart-button">Restart Quiz</button>
      <button onClick={onToggleMode} className="mode-toggle-button">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}
