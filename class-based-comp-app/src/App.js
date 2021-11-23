import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" country='in' category='general' pageSize={12} />} />
          <Route exact path="/business" element={<News key="business" country='in' category='business' pageSize={12} />} /> 
          <Route exact path="/entertainment" element={<News key="entertainment" country='in' category='entertainment' pageSi exactze={12} />} />
          <Route exact path="/health" element={<News key="health" country='in' category='health' pageSize={12} />} />
          <Route exact path="/science" element={<News key="science" country='in' category='science' pageSize={12} />} /> 
          <Route exact path="/sports" element={<News key="sports" country='in' category='sports' pageSize={12} />} />
          <Route exact path="/technology" element={<News key="technology" country='in' category='technology' pageSize={12} />} />
        </Routes>
      </Router>
    )
  }
}

