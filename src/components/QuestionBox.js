import React, { useState } from 'react';
import questions from '../questions';
import './QuestionBox.css';

export default function QuestionBox({ onQuizEnd, darkMode }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [highlight, setHighlight] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      onQuizEnd(score + 1);
    }
  };

  const toggleHighlight = () => {
    setHighlight(!highlight);
  };

  return (
    <div className={`question-container ${darkMode ? 'dark-mode' : ''}`}>
      <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
      <p className={`question-text ${highlight ? 'highlight' : ''}`}>
        {questions[currentQuestion].text}
      </p>
      <div className="options-container">
        {questions[currentQuestion].options.map((option) => (
          <button 
            key={option.id} 
            onClick={() => handleAnswerClick(option.isCorrect)} 
            className="option-button"
          >
            {option.text}
          </button>
        ))}
      </div>
      <div className="highlight-buttons">
        <button onClick={toggleHighlight} className="highlight-button">
          {highlight ? 'Remove Highlight' : 'Highlight'}
        </button>
      </div>
    </div>
  );
}
