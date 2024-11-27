import React, { useState } from 'react';
import './Posttest.css';
const questions = [
  {
    id: 1,
    question: "What is the time complexity of accessing an element in a singly linked list?",
    options: [
      { id: 'a', text: 'O(1)', correct: false },
      { id: 'b', text: 'O(n)', correct: true },
      { id: 'c', text: 'O(log n)', correct: false },
      { id: 'd', text: 'O(n log n)', correct: false },
    ],
  },
  {
    id: 2,
    question: "Which operation is the most efficient for inserting an element at the beginning of a singly linked list?",
    options: [
      { id: 'a', text: 'O(n)', correct: false },
      { id: 'b', text: 'O(1)', correct: true },
      { id: 'c', text: 'O(log n)', correct: false },
      { id: 'd', text: 'O(n log n)', correct: false },
    ],
  },
  {
    id: 3,
    question: "Which type of linked list allows traversal in both directions?",
    options: [
      { id: 'a', text: 'Singly Linked List', correct: false },
      { id: 'b', text: 'Doubly Linked List', correct: true },
      { id: 'c', text: 'Circular Linked List', correct: false },
      { id: 'd', text: 'None of the above', correct: false },
    ],
  },
  {
    id: 4,
    question: "What is the space complexity of a singly linked list?",
    options: [
      { id: 'a', text: 'O(1)', correct: false },
      { id: 'b', text: 'O(n)', correct: true },
      { id: 'c', text: 'O(log n)', correct: false },
      { id: 'd', text: 'O(n log n)', correct: false },
    ],
  },
  {
    id: 5,
    question: "Which operation requires O(n) time complexity in a singly linked list?",
    options: [
      { id: 'a', text: 'Accessing the first element', correct: false },
      { id: 'b', text: 'Inserting at the beginning', correct: false },
      { id: 'c', text: 'Inserting at the end', correct: true },
      { id: 'd', text: 'Removing the first element', correct: false },
    ],
  },
  {
    id: 6,
    question: "In a doubly linked list, how many pointers does each node contain?",
    options: [
      { id: 'a', text: 'One pointer (next)', correct: false },
      { id: 'b', text: 'Two pointers (next and prev)', correct: true },
      { id: 'c', text: 'Three pointers (next, prev, and data)', correct: false },
      { id: 'd', text: 'Three pointers (next, prev, and index)', correct: false },
    ],
  },
  {
    id: 7,
    question: "Which of the following is a disadvantage of using a linked list?",
    options: [
      { id: 'a', text: 'It allows for fast random access to elements', correct: false },
      { id: 'b', text: 'It requires extra memory for storing pointers', correct: true },
      { id: 'c', text: 'It does not require extra memory for pointers', correct: false },
      { id: 'd', text: 'It has faster insertion and deletion compared to arrays', correct: false },
    ],
  },
  {
    id: 8,
    question: "Which type of linked list is used to implement the concept of a 'queue' (FIFO)?",
    options: [
      { id: 'a', text: 'Singly Linked List', correct: true },
      { id: 'b', text: 'Doubly Linked List', correct: false },
      { id: 'c', text: 'Circular Linked List', correct: false },
      { id: 'd', text: 'Array', correct: false },
    ],
  },
  {
    id: 9,
    question: "Which of the following is true about a circular linked list?",
    options: [
      { id: 'a', text: 'The last node points to the first node', correct: true },
      { id: 'b', text: 'It is not useful for implementing queues', correct: false },
      { id: 'c', text: 'Each node contains only one pointer', correct: false },
      { id: 'd', text: 'It is slower than a doubly linked list for insertion and deletion', correct: false },
    ],
  },
  {
    id: 10,
    question: "What is the primary advantage of a linked list over an array?",
    options: [
      { id: 'a', text: 'Linked lists allow random access', correct: false },
      { id: 'b', text: 'Linked lists are more memory-efficient when dealing with dynamic data', correct: true },
      { id: 'c', text: 'Arrays can grow dynamically in size', correct: false },
      { id: 'd', text: 'Arrays require fewer pointers to store data', correct: false },
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
    