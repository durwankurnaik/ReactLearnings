import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Donate from './components/Donate';
import Offers from './components/Offers';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    )
  }
}

