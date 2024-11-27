import React, { useState } from 'react';
import './Algorithm.css';

const Algorithm = () => {
  return (
    <div className="para">
      <h2>Stack and Queue Visualization</h2>
      
      <h3>Stack Algorithm</h3>
      <p>
        A Stack follows the *Last In, First Out (LIFO)* principle. The last element added to the stack will be the first one to be removed.
      </p>
      <ol>
        <li><strong>Push:</strong> Add an element to the top of the stack.</li>
        <li><strong>Pop:</strong> Remove the top element from the stack.</li>
        <li><strong>Peek/Top:</strong> View the top element of the stack without removing it.</li>
        <li><strong>IsEmpty:</strong> Check if the stack is empty.</li>
      </ol>
      <p>
        The operations happen on one end called the "top" of the stack. Here is an example:
      </p>
      <pre>
        Stack Operations:
        Push(1) → Stack = [1]
        Push(2) → Stack = [1, 2]
        Pop()   → Stack = [1]
      </pre>

      <h3>Queue Algorithm</h3>
      <p>
        A Queue follows the *First In, First Out (FIFO)* principle. The first element added to the queue will be the first one to be removed.
      </p>
      <ol>
        <li><strong>Enqueue:</strong> Add an element to the end of the queue.</li>
        <li><strong>Dequeue:</strong> Remove the front element from the queue.</li>
        <li><strong>Front:</strong> View the front element of the queue without removing it.</li>
        <li><strong>IsEmpty:</strong> Check if the queue is empty.</li>
      </ol>
      <p>
        The operations happen on two ends: the "front" (where elements are dequeued) and the "rear" (where elements are enqueued). Example:
      </p>
      <pre>
        Queue Operations:
        Enqueue(1) → Queue = [1]
        Enqueue(2) → Queue = [1, 2]
        Dequeue()  → Queue = [2]
      </pre>
    </div>
  );
}

export default Algorithm;