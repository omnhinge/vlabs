import React from "react";

const Algorithm = () => {
  return (
    <div className="para">
      <h2 className="paraq">Binary Search Tree (BST) Operations Algorithm</h2>
      <p className="para">
        A  Binary Search Tree (BST)  is a binary tree data structure in which each node has at most two children: a left child and a right child. 
        The key property of the BST is that the left subtree contains only nodes with values smaller than the node’s value, and the right subtree contains only nodes with values greater than the node’s value. Below is the algorithm for basic operations on a Binary Search Tree.
      </p>

      <h3 className="paraq">1. Insertion Algorithm</h3>
      <p className="para">
        The insertion process in a Binary Search Tree involves placing a new node in the correct position based on the node's value. 
        Here's the step-by-step algorithm for insertion:
      </p>
      <ol>
        <li>Start from the root node of the tree.</li>
        <li>If the tree is empty, make the new node the root.</li>
        <li>If the tree is not empty, compare the value to be inserted with the value of the current node:
          <ul>
            <li>If the value is smaller, move to the left child of the current node.</li>
            <li>If the value is larger, move to the right child of the current node.</li>
          </ul>
        </li>
        <li>Repeat the process until an empty child position (left or right) is found. Insert the new node in that position.</li>
      </ol>

      <h3 className="paraq">2. Search Algorithm</h3>
      <p className="para">
        The search operation in a Binary Search Tree allows us to find whether a value exists in the tree. 
        The algorithm proceeds as follows:
      </p>
      <ol>
        <li>Start from the root node of the tree.</li>
        <li>If the value to be searched matches the value of the current node, return true (node found).</li>
        <li>If the value is smaller than the current node, move to the left child of the current node.</li>
        <li>If the value is larger than the current node, move to the right child of the current node.</li>
        <li>Repeat the process until the value is found or the current node becomes null (node not found).</li>
      </ol>

      <h3 className="paraq">3. Deletion Algorithm</h3>
      <p className="para">
        Deleting a node from a BST involves three different cases:
      </p>
      <ol>
        <li>If the node to be deleted has  no children  (it is a leaf node), simply remove the node.</li>
        <li>If the node to be deleted has  one child , remove the node and replace it with its only child.</li>
        <li>If the node to be deleted has  two children , follow these steps:
          <ul>
            <li>Find the  in-order successor  (the smallest node in the right subtree) or  in-order predecessor  (the largest node in the left subtree) of the node to be deleted.</li>
            <li>Replace the value of the node to be deleted with the value of the in-order successor or predecessor.</li>
            <li>Delete the in-order successor or predecessor node, which will be a leaf node or have only one child.</li>
          </ul>
        </li>
      </ol>

      <h3 className="paraq">4. In-order Traversal Algorithm</h3>
      <p className="para">
        In-order traversal of a BST visits nodes in  ascending order . The algorithm follows these steps:
      </p>
      <ol>
        <li>Start from the leftmost node (the leftmost leaf).</li>
        <li>Visit the left subtree first, then the current node, and finally the right subtree.</li>
        <li>Recursively repeat the process for each subtree.</li>
      </ol>

      <h3 className="paraq">5. Pre-order Traversal Algorithm</h3>
      <p className="para">
        Pre-order traversal visits nodes in the following order:  root, left, right . Here’s the algorithm:
      </p>
      <ol>
        <li>Visit the current node first, then the left subtree, and finally the right subtree.</li>
        <li>Recursively repeat the process for each subtree.</li>
      </ol>

      <h3 className="paraq">6. Post-order Traversal Algorithm</h3>
      <p className="para">
        Post-order traversal visits nodes in the order:  left, right, root . The algorithm proceeds as follows:
      </p>
      <ol>
        <li>Visit the left subtree first, then the right subtree, and finally the current node.</li>
        <li>Recursively repeat the process for each subtree.</li>
      </ol>

      <h3 className="paraq">Conclusion</h3>
      <p className="para">
        Binary Search Trees (BSTs) are efficient data structures for storing and searching ordered data. The algorithmic steps described above form the foundation for manipulating BSTs, allowing for fast operations such as insertion, searching, deletion, and traversal. Properly balanced BSTs ensure that these operations can be done in O(log n) time on average, making them suitable for a variety of applications, such as databases and indexing systems.
      </p>
    </div>
  );
};

export default Algorithm;