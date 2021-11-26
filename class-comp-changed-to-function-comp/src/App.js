import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(10);

  document.body.style.background = 'rgb(104 39 49)';
  document.body.style.color = 'white';
  return (
    <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
      // onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" country='in' category='general' pageSize={12} />} />
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" country='in' category='business' pageSize={12} />} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" country='in' category='entertainment' pageSi exactze={12} />} />
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" country='in' category='health' pageSize={12} />} />
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" country='in' category='science' pageSize={12} />} />
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" country='in' category='sports' pageSize={12} />} />
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" country='in' category='technology' pageSize={12} />} />
      </Routes>
    </Router>
  )
}

export default App;
