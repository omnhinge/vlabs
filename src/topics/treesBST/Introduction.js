import React from "react";

const Introduction = () => {
  return (
    <div className="para">
      <p className="para">
        A  Binary Search Tree (BST)  is a type of binary tree in which each node contains a key (or value) and two subtrees, the left and right subtrees. The key property of a BST is that for every node:
      </p>
      <ul>
        <li>The value of all nodes in the left subtree is less than the node's value.</li>
        <li>The value of all nodes in the right subtree is greater than the node's value.</li>
      </ul>
      <p className="para">
        This ordering property enables efficient searching, insertion, and deletion operations. A well-balanced BST ensures that operations can be performed in  O(log n)  time, where  n  is the number of nodes in the tree. However, in the worst case (if the tree becomes unbalanced), these operations can degrade to  O(n) .
      </p>

      <p className="paraq">Structure of a Binary Search Tree</p>
      <p className="para">
        A Binary Search Tree is made up of nodes, where each node contains:
      </p>
      <ul>
        <li>A value (or key) that stores the data.</li>
        <li>A reference (or pointer) to its left child (which contains values smaller than the node's value).</li>
        <li>A reference (or pointer) to its right child (which contains values greater than the node's value).</li>
        <li>A reference to its parent node (optional in some implementations).</li>
      </ul>
      <p className="para">
        The  root  is the topmost node in the tree. Every other node is a descendant of the root, and every node has a unique path leading to it from the root. A leaf node is a node with no children.
      </p>

      <p className="paraq">Key Operations in a Binary Search Tree</p>
      <p className="para">
        Binary Search Trees support several key operations that are efficient due to the tree's sorted structure:
      </p>
      <ul>
        <li><strong>Insertion:</strong> Insert a new node by finding the correct position in the tree where the node's value is less than the parent node's value and greater than the left child's value.</li>
        <li><strong>Searching:</strong> To search for a value, traverse the tree starting from the root. If the value is smaller than the current node, move to the left subtree; if larger, move to the right subtree.</li>
        <li><strong>Deletion:</strong> Deleting a node involves three cases:
          <ul>
            <li>If the node has no children, simply remove it.</li>
            <li>If the node has one child, replace the node with its child.</li>
            <li>If the node has two children, find the in-order successor or predecessor (the smallest node in the right subtree or the largest node in the left subtree), replace the node with this successor, and then delete the successor node.</li>
          </ul>
        </li>
      </ul>

      <p className="paraq">Advantages of Binary Search Trees</p>
      <p className="para">
        Binary Search Trees have several advantages:
      </p>
      <ul>
        <li><strong>Efficient Search:</strong> Searching for an element can be done in O(log n) time in the average case.</li>
        <li><strong>Sorted Data:</strong> BSTs store data in a sorted order, which makes it easy to perform in-order traversal to get data in ascending or descending order.</li>
        <li><strong>Efficient Insertions and Deletions:</strong> Insertion and deletion can also be done in O(log n) time, making the BST a good choice for applications that need fast updates.</li>
      </ul>

      <p className="paraq">Challenges with Binary Search Trees</p>
      <p className="para">
        While BSTs are efficient, they can become unbalanced if nodes are inserted in an order that doesn't keep the tree balanced. This can lead to the tree resembling a linked list, which results in O(n) performance for search, insert, and delete operations. To overcome this, balanced BSTs like  AVL Trees  and  Red-Black Trees  are used, which maintain balance by automatically adjusting the tree structure during insertions and deletions.
      </p>

      <p className="paraq">Applications of Binary Search Trees</p>
      <p className="para">
        Binary Search Trees are used in a variety of applications due to their efficient operations and sorted structure. Some key use cases include:
      </p>
      <ul>
        <li><strong>Database Indexing:</strong> BSTs are often used to index large databases, allowing for efficient searching and retrieval of records.</li>
        <li><strong>Autocompletion:</strong> In applications like search engines and text editors, BSTs can be used to store a dictionary of words, allowing for fast prefix matching and autocompletion suggestions.</li>
        <li><strong>File Systems:</strong> File systems often use trees to represent directory structures, with the root representing the main directory and subdirectories represented as child nodes.</li>
        <li><strong>Priority Queues:</strong> In some cases, Binary Search Trees are used to implement priority queues, where each node represents an item with a priority value.</li>
      </ul>

      <p className="paraq">Types of Binary Search Trees</p>
      <p className="para">
        There are several variations of the Binary Search Tree designed to improve efficiency, handle dynamic updates, and prevent the tree from becoming unbalanced:
      </p>
      <ul>
        <li><strong>AVL Tree:</strong> A self-balancing binary search tree where the difference between the heights of the left and right subtrees (balance factor) is at most 1.</li>
        <li><strong>Red-Black Tree:</strong> A self-balancing binary search tree that uses color properties (red and black) to ensure that the tree remains balanced.</li>
        <li><strong>Splay Tree:</strong> A self-adjusting binary search tree where recently accessed nodes are moved to the root to speed up future accesses.</li>
      </ul>

      <p className="para">
        In summary, Binary Search Trees are fundamental data structures used to efficiently store, retrieve, and manipulate ordered data. They form the basis for many other data structures and algorithms, and their performance is directly influenced by the balance of the tree. 
      </p>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Pz2lUHRV8Dg?si=ne_vElzturps4TFL"
        title="Binary Search Tree Tutorial"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Introduction;