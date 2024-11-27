import './App.css';
import Header from './header';
import Paragraph from './info';
import CardLayout from './Card';
import Footer from './footer';
import About from './About';
// import './style.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// other pages
import ShellSort from './topics/sorting/shell sort/ShellSort';
import Dijkstra from './topics/graph/Dijkstra'; 
import LinkedList from './topics/linkedlist/linkedlist';
import Hashing from './topics/hashing/hashing';
import Treebst from './topics/treesBST/trees';
import Stackqueue from './topics/stackqueue/stackqueue';

//
function App() {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/codlab' : '/'}>
      <div className='app'>
        
        
        <Routes>
          <Route path="/" element={
            <div>
              <Header />
              <Paragraph />
              <CardLayout />
              <Footer/>
            </div>
          } />
          <Route path="/shellsort" element={<ShellSort />} />
          <Route path="/dijkstra" element={<Dijkstra />} />
          <Route path="/linkedlist" element={<LinkedList />} />
          <Route path="/hashing" element={<Hashing />} />
          <Route path="/trees" element={<Treebst />} />
          <Route path="/stackqueue" element={<Stackqueue />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;