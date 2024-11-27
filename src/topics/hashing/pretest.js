import React, { useState } from 'react';
import '../linkedlist/Posttest.css';

const questions = [
  {
    id: 1,
    question: "What is the main purpose of a hash function?",
    options: [
      { id: 'a', text: 'To encrypt data', correct: false },
      { id: 'b', text: 'To map data to specific locations in a hash table', correct: true },
      { id: 'c', text: 'To compress data', correct: false },
      { id: 'd', text: 'To sort data', correct: false },
    ],
  },
  {
    id: 2,
    question: "What is a collision in hashing?",
    options: [
      { id: 'a', text: 'When two different keys map to the same index in a hash table', correct: true },
      { id: 'b', text: 'When a key cannot be found', correct: false },
      { id: 'c', text: 'When a key is mapped to the wrong value', correct: false },
      { id: 'd', text: 'When the hash table is full', correct: false },
    ],
  },
  {
    id: 3,
    question: "Which of the following is a way to resolve collisions?",
    options: [
      { id: 'a', text: 'Chaining', correct: true },
      { id: 'b', text: 'Searching', correct: false },
      { id: 'c', text: 'Re-indexing', correct: false },
      { id: 'd', text: 'Compression', correct: false },
    ],
  },
];

function Pretest() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswerChange = (questionId, optionId) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: optionId,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const calculatedScore = questions.reduce((acc, question) => {
      return acc + (answers[question.id] === question.options.find(option => option.correct)?.id ? 1 : 0);
    }, 0);
    
    setScore(calculatedScore);
    alert(`Pretest submitted! Your score is ${calculatedScore} out of ${questions.length}.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map(question => (
        <fieldset key={question.id} className="question-fieldset">
          <legend className="question-text">{question.question}</legend>
          {question.options.map(option => (
            <div key={option.id} className="option">
              <label className="option-label">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.id}
                  checked={answers[question.id] === option.id}
                  onChange={() => handleAnswerChange(question.id, option.id)}
                />
                {option.text}
              </label>
            </div>
          ))}
        </fieldset>
      ))}
      <button type="submit" className="submit-button">Submit</button>
      {score !== null && <div className="score-display">Your score: {score}</div>}
    </form>
  );
}

export default Pretest;
