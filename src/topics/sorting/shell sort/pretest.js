import React, { useState } from 'react';
import '../../linkedlist/Posttest.css';
const questions = [
  {
    id: 1,
    question: "Which of the following algorithms has the best time complexity for searching in an unsorted array?",
    options: [
      { id: 'a', text: 'Binary Search', correct: false },
      { id: 'b', text: 'Linear Search', correct: true },
      { id: 'c', text: 'Jump Search', correct: false },
      { id: 'd', text: 'Interpolation Search', correct: false },
    ],
  },
  {
    id: 2,
    question: "What is the time complexity of Quick Sort in the average case?",
    options: [
      { id: 'a', text: 'O(n^2)', correct: false },
      { id: 'b', text: 'O(n log n)', correct: true },
      { id: 'c', text: 'O(n)', correct: false },
      { id: 'd', text: 'O(log n)', correct: false },
    ],
  },
  {
    id: 3,
    question: "Which sorting algorithm is generally considered the fastest for small datasets?",
    options: [
      { id: 'a', text: 'Merge Sort', correct: false },
      { id: 'b', text: 'Quick Sort', correct: false },
      { id: 'c', text: 'Insertion Sort', correct: true },
      { id: 'd', text: 'Heap Sort', correct: false },
    ],
  },
  {
    id: 4,
    question: "Which data structure is used to implement Breadth-First Search (BFS)?",
    options: [
      { id: 'a', text: 'Stack', correct: false },
      { id: 'b', text: 'Queue', correct: true },
      { id: 'c', text: 'Priority Queue', correct: false },
      { id: 'd', text: 'Linked List', correct: false },
    ],
  },
  {
    id: 5,
    question: "What is the time complexity of Binary Search on a sorted array?",
    options: [
      { id: 'a', text: 'O(n)', correct: false },
      { id: 'b', text: 'O(log n)', correct: true },
      { id: 'c', text: 'O(n log n)', correct: false },
      { id: 'd', text: 'O(1)', correct: false },
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
