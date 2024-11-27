import React from "react";
import linkedlist from './linkedlist.png'
import double from './double.png'
const Concept =() =>{
    return(
       <>
       <p className="paraq">SINGLY LINKED LIST</p>
       <img src={linkedlist} alt="linkedlist" width={800}></img>
       <p className="para"> A singly linked list is the simplest type of linked list in which every node contains some data and 
a pointer to the next node of the same data type. By saying that the node contains a pointer to the 
next node, we mean that the node stores the address of the next node in sequence. A singly linked 
list allows traversal of data only in one way. Figure 6.7 shows a singly linked list.</p>
<p className="paraq">DOUBLY LINKED LIST</p>
<p className="para">A doubly linked list or a two-way linked list is a more complex type of linked list which contains 
a pointer to the next as well as the previous node in the sequence. </p>
<img src={double} alt="doublylinkedlist" width={800}></img>
<p className="paraq">Uses of linkedlist :</p>
<ul className="para">
<li>
            <strong>Dynamic Memory Allocation:</strong> 
            Linked lists allow dynamic memory allocation, meaning that memory is allocated as needed rather than reserving a fixed block upfront. 
            <br></br><em>React Example:</em> In scenarios where large amounts of data need to be processed and components need to be dynamically updated, a linked list can be used to efficiently manage memory.
        </li>
        <li>
            <strong>Implementing Undo/Redo Functionality:</strong> 
            Linked lists are ideal for implementing undo/redo features as each node can represent a state change. 
            <br></br><em>React Example:</em> For applications like text editors or drawing apps, you can maintain a linked list of previous states to allow undo/redo actions by navigating back and forth through the list.
        </li>
        <li>
            <strong>Efficient Insertions and Deletions:</strong> 
            Linked lists provide O(1) time complexity for inserting or deleting elements at the beginning or middle, unlike arrays. 
            <br></br><em>React Example:</em> In apps that require frequent updates to lists of items, such as real-time notifications or user-generated content, linked lists allow fast insertions and deletions without needing to reindex other elements.
        </li>
        <li>
            <strong>Implementing Queues (FIFO):</strong> 
            A queue can be implemented using a singly linked list where elements are inserted at the tail and removed from the head. 
            <br></br><em>React Example:</em> In applications where messages or tasks are processed in a first-in-first-out order, such as in chat applications or task schedulers, a queue implemented with a linked list ensures efficient operations.
        </li>
        <li>
            <strong>Implementing Stacks (LIFO):</strong> 
            A stack can be implemented using a linked list where elements are added and removed from the head. 
            <br></br><em>React Example:</em> A linked list can be used to manage the state of components, such as keeping track of the current view or navigation history in a single-page application.
        </li>
        <li>
            <strong>Graph Representation:</strong> 
            Linked lists can be used to represent adjacency lists in graph data structures. 
            <br></br><em>React Example:</em> If building a graph-based visualization or game, a linked list can efficiently store the edges of a node, helping with performance when dynamically adding/removing nodes.
        </li>
        <li>
            <strong>Sparse Data Representation:</strong> 
            Linked lists can be used to store sparse data where not all indices are populated. 
            <br></br><em>React Example:</em> In applications that need to store large sparse datasets, such as grids or matrices with few non-zero elements, a linked list can optimize memory usage and performance.
        </li>
        <li>
            <strong>Memory Efficient for Large Datasets:</strong> 
            Linked lists are more memory-efficient than arrays when working with large datasets that change frequently. 
            <br></br><em>React Example:</em> In large-scale data processing applications, such as financial dashboards or scientific apps, a linked list helps manage data structures where frequent additions and deletions occur.
        </li>
        <li>
            <strong>Implementing Circular Buffers:</strong> 
            Circular linked lists are useful for implementing buffers where the last element points back to the first element, which is often used in resource management. 
            <br></br><em>React Example:</em> In real-time streaming applications (e.g., video streaming or logging systems), a circular linked list can be used to store the buffer of recent items, allowing for efficient overwriting of old data.
        </li>
        <li>
            <strong>Real-Time Collaborative Applications:</strong> 
            Linked lists can store and manage elements that are being edited or changed in real time, especially when changes happen at different positions. 
            <br></br><em>React Example:</em> Collaborative whiteboard or document editing apps can use a linked list to store a list of real-time updates made by users, ensuring efficient management of the data being edited.
        </li>
</ul>

       </>
    );
}

export default Concept;