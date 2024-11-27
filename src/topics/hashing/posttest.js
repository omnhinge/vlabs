import React, { useState } from 'react';
import '../linkedlist/Posttest.css';

const questions = [
  {
    id: 1,
    question: "What is the time complexity of searching in a hash table?",
    options: [
      { id: 'a', text: 'O(n)', correct: false },
      { id: 'b', text: 'O(1)', correct: true },
      { id: 'c', text: 'O(log n)', correct: false },
      { id: 'd', text: 'O(n^2)', correct: false },
    ],
  },
  {
    id: 2,
    question: "What is the purpose of a hash function in a hash table?",
    options: [
      { id: 'a', text: 'To minimize storage space', correct: false },
      { id: 'b', text: 'To generate an index for keys in the hash table', correct: true },
      { id: 'c', text: 'To sort elements in the hash table', correct: false },
      { id: 'd', text: 'To secure data in the table', correct: false },
    ],
  },
  {
    id: 3,
    question: "What is a good property of a hash function?",
    options: [
      { id: 'a', text: 'Produces frequent collisions', correct: false },
      { id: 'b', text: 'Maps keys randomly', correct: false },
      { id: 'c', text: 'Distributes keys uniformly', correct: true },
      { id: 'd', text: 'Requires high computational cost', correct: false },
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
