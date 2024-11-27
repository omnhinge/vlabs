// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../topics.css';

// const Sidebar = () => {
//   return (
//     <div id="sidebar">
//       <p>Other Topics</p>
//       <div id="menu">
//       <Link to="/ShellSort"><button className="topics"><p>Sorting</p></button></Link>
//         <Link to="/hashing"><button className="topics"><p>Hashing</p></button></Link>
//         <Link to="/linkedlist"><button className="topics"><p>Linked List</p></button></Link>
//         <Link to="/stackqueue"><button className="topics"><p>Stack and Queue</p></button></Link>
//         <Link to="/trees"><button className="topics"><p>Trees</p></button></Link>
//         <Link to="/dijkstra"><button className="topics"><p>Graphs</p></button></Link>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../topics.css';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div id="sidebar">
      <p>Other Topics</p>
      <div id="menu">
        <Link to="/ShellSort">
          <button className={`topics ${isActive('/ShellSort') ? 'active' : ''}`}>
            <p>Sorting</p>
          </button>
        </Link>
        <Link to="/hashing">
          <button className={`topics ${isActive('/hashing') ? 'active' : ''}`}>
            <p>Hashing</p>
          </button>
        </Link>
        <Link to="/linkedlist">
          <button className={`topics ${isActive('/linkedlist') ? 'active' : ''}`}>
            <p>Linked List</p>
          </button>
        </Link>
        <Link to="/stackqueue">
          <button className={`topics ${isActive('/stackqueue') ? 'active' : ''}`}>
            <p>Stack and Queue</p>
          </button>
        </Link>
        <Link to="/trees">
          <button className={`topics ${isActive('/trees') ? 'active' : ''}`}>
            <p>Trees</p>
          </button>
        </Link>
        <Link to="/dijkstra">
          <button className={`topics ${isActive('/dijkstra') ? 'active' : ''}`}>
            <p>Graphs</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
  