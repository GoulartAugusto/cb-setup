import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HeaderTwo from './components/HeaderTwo';
import Hub from './components/Hub';
import HubTwo from './components/HubTwo';
import HubCopy from './components/Hub copy';
import HubCopyTwo from './components/HubcopyTwo';
import HeaderConfig from './components/HeaderConfig';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<><Header /><Hub /></>} />
          <Route exact path='/login' element={<><HeaderTwo /><HubTwo /></>} />
          <Route exact path='/billing' element={<><Header /><HubCopy /></>} />
          <Route exact path='/configuration' element={<><HeaderConfig /><HubCopyTwo /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
