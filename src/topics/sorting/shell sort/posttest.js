import React, { useState } from 'react';
import '../../linkedlist/Posttest.css';

const questions = [
  {
    id: 1,
    question: "What is the main advantage of the Shell Sort algorithm?",
    options: [
      { id: 'a', text: 'It is a stable sort.', correct: false },
      { id: 'b', text: 'It has a better worst-case time complexity than Quick Sort.', correct: false },
      { id: 'c', text: 'It can efficiently sort large arrays.', correct: true },
      { id: 'd', text: 'It uses fewer comparisons than Bubble Sort.', correct: false },
    ],
  },
  {
    id: 2,
    question: "What type of algorithm is Shell Sort?",
    options: [
      { id: 'a', text: 'Divide and Conquer', correct: false },
      { id: 'b', text: 'Insertion Sort', correct: true },
      { id: 'c', text: 'Selection Sort', correct: false },
      { id: 'd', text: 'Merge Sort', correct: false },
    ],
  },
  {
    id: 3,
    question: "Which of the following sequences is commonly used for Shell Sort?",
    options: [
      { id: 'a', text: '1, 2, 3, 4, 5', correct: false },
      { id: 'b', text: 'N/2, N/4, N/8, ..., 1', correct: true },
      { id: 'c', text: '1, 3, 5, 7, 9', correct: false },
      { id: 'd', text: 'N, N-1, N-2, ..., 1', correct: false },
    ],
  },
  {
    id: 4,
    question: "What is the average time complexity of Shell Sort?",
    options: [
      { id: 'a', text: 'O(n^2)', correct: false },
      { id: 'b', text: 'O(n log n)', correct: false },
      { id: 'c', text: 'O(n^(3/2))', correct: true },
      { id: 'd', text: 'O(log n)', correct: false },
    ],
  },
  {
    id: 5,
    question: "Which of the following statements about Shell Sort is true?",
    options: [
      { id: 'a', text: 'It is a stable sorting algorithm.', correct: false },
      { id: 'b', text: 'It requires additional memory space.', correct: false },
      { id: 'c', text: 'It sorts the array in place.', correct: true },
      { id: 'd', text: 'It is only efficient for small datasets.', correct: false },
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