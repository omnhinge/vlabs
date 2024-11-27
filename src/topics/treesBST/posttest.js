import React, { useState } from 'react';
import '../linkedlist/Posttest.css';
const questions = [
  {
    id: 1,
    question: "What is the height of a binary tree with 'n' nodes in the best case?",
    options: [
      { id: 'a', text: 'O(1)', correct: false },
      { id: 'b', text: 'O(log n)', correct: true },
      { id: 'c', text: 'O(n)', correct: false },
      { id: 'd', text: 'O(n log n)', correct: false },
    ],
  },
  {
    id: 2,
    question: "Which traversal of a binary tree visits nodes in left-root-right order?",
    options: [
      { id: 'a', text: 'Preorder', correct: false },
      { id: 'b', text: 'Inorder', correct: true },
      { id: 'c', text: 'Postorder', correct: false },
      { id: 'd', text: 'Level order', correct: false },
    ],
  },
  {
    id: 3,
    question: "Which type of tree allows efficient insertion, deletion, and search operations?",
    options: [
      { id: 'a', text: 'Binary Search Tree', correct: true },
      { id: 'b', text: 'AVL Tree', correct: false },
      { id: 'c', text: 'Heap', correct: false },
      { id: 'd', text: 'Binary Tree', correct: false },
    ],
  },
  {
    id: 4,
    question: "What is the maximum number of children a node can have in a binary tree?",
    options: [
      { id: 'a', text: '1', correct: false },
      { id: 'b', text: '2', correct: true },
      { id: 'c', text: '3', correct: false },
      { id: 'd', text: 'No limit', correct: false },
    ],
  },
  {
    id: 5,
    question: "Which data structure is used for implementing a priority queue?",
    options: [
      { id: 'a', text: 'Binary Tree', correct: false },
      { id: 'b', text: 'Heap', correct: true },
      { id: 'c', text: 'Binary Search Tree', correct: false },
      { id: 'd', text: 'AVL Tree', correct: false },
    ],
  },
  {
    id: 6,
    question: "What is the time complexity of inserting an element in an AVL Tree?",
    options: [
      { id: 'a', text: 'O(log n)', correct: true },
      { id: 'b', text: 'O(n)', correct: false },
      { id: 'c', text: 'O(1)', correct: false },
      { id: 'd', text: 'O(n log n)', correct: false },
    ],
  },
  {
    id: 7,
    question: "In a binary search tree, where are values greater than the root node stored?",
    options: [
      { id: 'a', text: 'Left subtree', correct: false },
      { id: 'b', text: 'Right subtree', correct: true },
      { id: 'c', text: 'Both subtrees', correct: false },
      { id: 'd', text: 'Nowhere, they are not stored', correct: false },
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