import React from 'react';

const Paragraph = () => {
    return (
        <div style={styles.container}>
          <h1 style={styles.mainHeading}>Data Structures and Algorithms</h1>
    
          <section style={styles.section}>
            <h2 style={styles.sectionHeading}>Data Structures</h2>
            <p style={styles.description}>
              Data structures are methods of organizing and storing data for efficient access and modification. Each data structure is designed to support specific operations and has its own strengths and weaknesses.
            </p>
    
            <div style={styles.subsection}>
              <h3 style={styles.subheading}>1. Linear Data Structures</h3>
              <ul style={styles.list}>
                <li>
                  <strong>Array</strong>: Fixed-size collection of elements stored in contiguous memory locations. Ideal for indexing but not for dynamic resizing.
                </li>
                <li>
                  <strong>Linked List</strong>: A sequence of nodes with data and pointers, suitable for dynamic allocation but slower for indexing.
                </li>
                <li>
                  <strong>Stack</strong>: Follows LIFO (Last In, First Out). Used in undo mechanisms, expression evaluation, and more.
                </li>
                <li>
                  <strong>Queue</strong>: Follows FIFO (First In, First Out). Useful in task scheduling and buffering.
                </li>
              </ul>
            </div>
    
            <div style={styles.subsection}>
              <h3 style={styles.subheading}>2. Non-Linear Data Structures</h3>
              <ul style={styles.list}>
                <li>
                  <strong>Tree</strong>: A hierarchical structure, including binary trees and AVL trees. Widely used in databases and hierarchical data representation.
                </li>
                <li>
                  <strong>Graph</strong>: A network of nodes connected by edges, representing complex relationships. Essential in route optimization, networking, and social networks.
                </li>
              </ul>
            </div>
    
            <div style={styles.subsection}>
              <h3 style={styles.subheading}>3. Hashing</h3>
              <ul style={styles.list}>
                <li>
                  <strong>Hash Table</strong>: Stores data in key-value pairs, enabling fast access via hash functions. Common in databases, symbol tables, and caches.
                </li>
              </ul>
            </div>
    
            <div style={styles.subsection}>
              <h3 style={styles.subheading}>4. Advanced Data Structures</h3>
              <ul style={styles.list}>
                <li>
                  <strong>Heap</strong>: A specialized tree for priority queues. Useful in scheduling and sorting algorithms.
                </li>
                <li>
                  <strong>Trie</strong>: A prefix tree for fast retrieval of strings. Frequently used in dictionaries and autocomplete systems.
                </li>
                <li>
                  <strong>Segment Tree/Fenwick Tree</strong>: Efficient for range queries and modifications, popular in competitive programming.
                </li>
              </ul>
            </div>
          </section>
    
          <section style={styles.section}>
            <h2 style={styles.sectionHeading}>Algorithms</h2>
            <p style={styles.description}>
              Algorithms are step-by-step procedures or formulas for solving problems. They work with data structures to process data effectively.
            </p>
    
            <div style={styles.subsection}>
              <h3 style={styles.subheading}>1. Sorting Algorithms</h3>
              <ul style={styles.list}>
                <li>
                  <strong>Bubble Sort</strong>: Repeatedly swaps adjacent elements if they are in the wrong order. Simple but inefficient for large datasets.
                </li>
                <li>
                  <strong>Quick Sort</strong>: Divides and conquers by partitioning around a pivot. Efficient but requires careful pivot selection.
                </li>
                <li>
                  <strong>Merge Sort</strong>: Divides array into halves, sorts, and merges them. Stable and efficient for large datasets.
                </li>
              </ul>
            </div>
    
            <div style={styles.subsection}>
              <h3 style={styles.subheading}>2. Search Algorithms</h3>
              <ul style={styles.list}>
                <li>
                  <strong>Binary Search</strong>: Searches a sorted array by repeatedly dividing in half. Very efficient with logarithmic time complexity.
                </li>
                <li>
                  <strong>Linear Search</strong>: Searches each element sequentially. Works on unsorted data but is slower for large datasets.
                </li>
              </ul>
            </div>
    
            <div style={styles.subsection}>
              <h3 style={styles.subheading}>3. Graph Algorithms</h3>
              <ul style={styles.list}>
                <li>
                  <strong>Dijkstra's Algorithm</strong>: Finds the shortest path in weighted graphs. Used in GPS and network routing.
                </li>
                <li>
                  <strong>Breadth-First Search (BFS)</strong>: Traverses graph layer by layer. Good for finding the shortest path in unweighted graphs.
                </li>
                <li>
                  <strong>Depth-First Search (DFS)</strong>: Explores as far as possible before backtracking. Useful in cycle detection and topological sorting.
                </li>
              </ul>
            </div>
          </section>
        </div>
      );
    };
    
    const styles = {
      container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '100%',
        margin: '0 auto',
        // backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
      mainHeading: {
        fontSize: '2em',
        color: '#333',
        textAlign: 'center',
        marginBottom: '20px',
      },
      section: {
        marginBottom: '30px',
      },
      sectionHeading: {
        fontSize: '1.5em',
        color: '#0056b3',
        borderBottom: '2px solid #0056b3',
        paddingBottom: '5px',
      },
      description: {
        color: '#555',
        fontSize: '1em',
        marginBottom: '15px',
      },
      subsection: {
        marginLeft: '20px',
        marginTop: '15px',
      },
      subheading: {
        fontSize: '1.2em',
        color: '#333',
        marginBottom: '10px',
      },
      list: {
        color: '#333',
        fontSize: '0.95em',
        lineHeight: '1.6',
        paddingLeft: '20px',
        listStyleType: 'disc',
      },
    };
    

export default Paragraph;
