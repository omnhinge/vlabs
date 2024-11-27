import React, { useState } from 'react';
import '../linkedlist/Posttest.css';

const questions = [
  {
    id: 1,
    question: "Which operation removes an element from the top of a stack?",
    options: [
      { id: 'a', text: 'enqueue', correct: false },
      { id: 'b', text: 'dequeue', correct: false },
      { id: 'c', text: 'pop', correct: true },
      { id: 'd', text: 'insert', correct: false },
    ],
  },
  {
    id: 2,
    question: "What is the time complexity of the push operation in a stack?",
    options: [
      { id: 'a', text: 'O(1)', correct: true },
      { id: 'b', text: 'O(n)', correct: false },
      { id: 'c', text: 'O(log n)', correct: false },
      { id: 'd', text: 'O(n log n)', correct: false },
    ],
  },
  {
    id: 3,
    question: "Which data structure uses LIFO (Last In, First Out) principle?",
    options: [
      { id: 'a', text: 'Queue', correct: false },
      { id: 'b', text: 'Stack', correct: true },
      { id: 'c', text: 'Array', correct: false },
      { id: 'd', text: 'Linked List', correct: false },
    ],
  },
  {
    id: 4,
    question: "Which method in a stack retrieves the top element without removing it?",
    options: [
      { id: 'a', text: 'pop', correct: false },
      { id: 'b', text: 'top', correct: false },
      { id: 'c', text: 'peek', correct: true },
      { id: 'd', text: 'push', correct: false },
    ],
  },
  {
    id: 5,
    question: "What is a common application of stacks?",
    options: [
      { id: 'a', text: 'Sorting', correct: false },
      { id: 'b', text: 'Breadth-First Search', correct: false },
      { id: 'c', text: 'Depth-First Search', correct: true },
      { id: 'd', text: 'Merging', correct: false },
    ],
  },
  {
    id: 6,
    question: "Which of these expressions follows the correct sequence in a stack (LIFO)?",
    options: [
      { id: 'a', text: '1, 2, 3 - 3, 2, 1', correct: true },
      { id: 'b', text: '1, 2, 3 - 1, 2, 3', correct: false },
      { id: 'c', text: '1, 2, 3 - 2, 1, 3', correct: false },
      { id: 'd', text: '1, 2, 3 - 3, 1, 2', correct: false },
    ],
  },
  {
    id: 7,
    question: "What happens if you try to pop an element from an empty stack?",
    options: [
      { id: 'a', text: 'The stack inserts a default value', correct: false },
      { id: 'b', text: 'An overflow error occurs', correct: false },
      { id: 'c', text: 'An underflow error occurs', correct: true },
      { id: 'd', text: 'Nothing happens', correct: false },
    ],
  },
];

function Posttest() {
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

  
  export default Posttest;