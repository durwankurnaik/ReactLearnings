import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [tmode, setTmode] = useState('dark');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTmode('light');
      document.body.style.backgroundColor = '#343a40';
      document.body.style.coloe = 'white';
    } else {
      setMode('light');
      setTmode('dark');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#343a40';
    }
  }

  return (
      <Router>
      <Navbar mode={mode} toggleMode={toggleMode} modeStatus={mode} tmode={tmode} />
        <Routes>
          <Route path="/" element={<TextFrom temxt="Enter your text here" mode={mode} tmode={tmode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
  );
}

export default App;
