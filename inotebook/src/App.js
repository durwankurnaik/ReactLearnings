import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteStates from './context/notes/NoteStates';
import Footer from './components/Footer';

function App() {
  return (
    <NoteStates>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </NoteStates>
  );
}

export default App;
