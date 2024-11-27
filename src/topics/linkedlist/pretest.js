import React, { useState } from 'react';
import './Posttest.css';
const questions = [
  {
    id: 1,
    question: "What is the time complexity for inserting an element at the head of a singly linked list?",
    options: [
      { id: 'a', text: 'O(1)', correct: true },
      { id: 'b', text: 'O(n)', correct: false },
      { id: 'c', text: 'O(log n)', correct: false },
      { id: 'd', text: 'O(n log n)', correct: false },
    ],
  },
  {
    id: 2,
    question: "Which of the following operations can be performed in O(1) time in a linked list?",
    options: [
      { id: 'a', text: 'Accessing an element by index', correct: false },
      { id: 'b', text: 'Deleting a node given a pointer to it', correct: true },
      { id: 'c', text: 'Finding the length of the list', correct: false },
      { id: 'd', text: 'Reversing the list', correct: false },
    ],
  },
  {
    id: 3,
    question: "What is the space complexity of a linked list with n nodes?",
    options: [
      { id: 'a', text: 'O(1)', correct: false },
      { id: 'b', text: 'O(n)', correct: true },
      { id: 'c', text: 'O(log n)', correct: false },
      { id: 'd', text: 'O(n^2)', correct: false },
    ],
  },
  {
    id: 4,
    question: "Which of the following is a disadvantage of linked lists?",
    options: [
      { id: 'a', text: 'Dynamic size', correct: false },
      { id: 'b', text: 'Ease of insertion and deletion', correct: false },
      { id: 'c', text: 'Random access', correct: true },
      { id: 'd', text: 'Memory allocation', correct: false },
    ],
  },
  {
    id: 5,
    question: "In a doubly linked list, how many pointers does each node contain?",
    options: [
      { id: 'a', text: '1', correct: false },
      { id: 'b', text: '2', correct: true },
      { id: 'c', text: '3', correct: false },
      { id: 'd', text: '4', correct: false },
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
