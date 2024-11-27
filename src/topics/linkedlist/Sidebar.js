import React from 'react';
import { Link } from 'react-router-dom';
import '../topics.css';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <p>Other Topics</p>
      <div id="menu">
        <Link to="/hashing"><button className="topics"><p>Hashing</p></button></Link>
        <Link to="/linked-list"><button className="topics"><p>Linked List</p></button></Link>
        <Link to="/stack-queue"><button className="topics"><p>Stack and Queue</p></button></Link>
        <Link to="/trees"><button className="topics"><p>Trees</p></button></Link>
        <Link to="/dijkstra"><button className="topics"><p>Graphs</p></button></Link>
      </div>
    </div>
  );
};

export default Sidebar;
