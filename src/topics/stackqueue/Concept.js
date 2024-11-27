import React from "react";

const Concept = () => {
  return (
    <div className="para">
      <h2>Stack and Queue Concepts</h2>

      <h3>Stack Concept</h3>
      <p>
        A *Stack* is a linear data structure that follows the *Last In, First Out (LIFO)* principle. This means that the last element added to the stack is the first one to be removed. Stacks are commonly used in scenarios where you need to keep track of function calls, undo operations in text editors, or backtracking algorithms. 
      </p>
      <p>
        The basic operations on a stack are:
        <ul>
          <li><strong>Push:</strong> Adds an element to the top of the stack.</li>
          <li><strong>Pop:</strong> Removes the top element from the stack.</li>
          <li><strong>Peek:</strong> Views the top element without removing it.</li>
          <li><strong>IsEmpty:</strong> Checks if the stack is empty.</li>
        </ul>
      </p>
      <p>
        A Stack is often compared to a stack of plates: the plate placed last is the first one you'll take off. In a similar way, the last element pushed onto the stack will be the first one to be popped off.
      </p>

      <h3>Queue Concept</h3>
      <p>
        A *Queue* is another linear data structure, but it follows the *First In, First Out (FIFO)* principle. This means that the first element added to the queue will be the first one to be removed. Queues are commonly used in situations where tasks need to be processed in the order they were received, such as print jobs or task scheduling.
      </p>
      <p>
        The basic operations on a queue are:
        <ul>
          <li><strong>Enqueue:</strong> Adds an element to the rear of the queue.</li>
          <li><strong>Dequeue:</strong> Removes the element from the front of the queue.</li>
          <li><strong>Front:</strong> Views the front element without removing it.</li>
          <li><strong>IsEmpty:</strong> Checks if the queue is empty.</li>
        </ul>
      </p>
      <p>
        A Queue is similar to a line at a grocery store: the first person in line will be the first one to be served. In the same way, elements are added to the rear of the queue and removed from the front, ensuring that they are processed in the order they were added.
      </p>
    </div>
  );
};

export default Concept;