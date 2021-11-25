import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state = {
    progress: 10
  }
  
  setProgress = (progress) => {
    this.setState({
      progress: progress
    });
  }

  render() {
    return (
      <Router>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress}  key="general" country='in' category='general' pageSize={12} />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" country='in' category='business' pageSize={12} />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" country='in' category='entertainment' pageSi exactze={12} />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" country='in' category='health' pageSize={12} />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" country='in' category='science' pageSize={12} />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" country='in' category='sports' pageSize={12} />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" country='in' category='technology' pageSize={12} />} />
        </Routes>
      </Router>
    )
  }
}

