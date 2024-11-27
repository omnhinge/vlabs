import React, { useState } from 'react';
import '../linkedlist/Posttest.css';

const questions = [
  {
    id: 1,
    question: "What is the maximum number of children a node can have in a binary tree?",
    options: [
      { id: 'a', text: '1', correct: false },
      { id: 'b', text: '2', correct: true },
      { id: 'c', text: '3', correct: false },
      { id: 'd', text: 'No limit', correct: false },
    ],
  },
  {
    id: 2,
    question: "Which data structure is used for hierarchical data representation?",
    options: [
      { id: 'a', text: 'Array', correct: false },
      { id: 'b', text: 'Stack', correct: false },
      { id: 'c', text: 'Tree', correct: true },
      { id: 'd', text: 'Queue', correct: false },
    ],
  },
  {
    id: 3,
    question: "What is the time complexity of searching in an unbalanced binary tree in the worst case?",
    options: [
      { id: 'a', text: 'O(log n)', correct: false },
      { id: 'b', text: 'O(n)', correct: true },
      { id: 'c', text: 'O(n^2)', correct: false },
      { id: 'd', text: 'O(1)', correct: false },
    ],
  },
  {
    id: 4,
    question: "What type of traversal visits nodes level by level in a tree?",
    options: [
      { id: 'a', text: 'Pre-order traversal', correct: false },
      { id: 'b', text: 'In-order traversal', correct: false },
      { id: 'c', text: 'Post-order traversal', correct: false },
      { id: 'd', text: 'Level-order traversal', correct: true },
    ],
  },
  {
    id: 5,
    question: "Which of the following is a necessary condition for binary search to work efficiently?",
    options: [
      { id: 'a', text: 'The data must be unsorted', correct: false },
      { id: 'b', text: 'The data must be sorted', correct: true },
      { id: 'c', text: 'The data must be in a queue', correct: false },
      { id: 'd', text: 'The data must have unique elements', correct: false },
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
