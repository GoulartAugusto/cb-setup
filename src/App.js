import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hub from './components/Hub';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<><Header /><Hub /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
