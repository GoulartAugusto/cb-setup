import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HeaderLogin from './components/login/HeaderLogin';
import Hub from './components/Hub';
import HubLogin from './components/login/HubLogin';
import HubBilling from './components/billing/HubBilling';
import HubConfig from './components/configuration/HubConfig';
import HeaderConfig from './components/configuration/HeaderConfig';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<><Header /><Hub /></>} />
          <Route exact path='/login' element={<><HeaderLogin /><HubLogin /></>} />
          <Route exact path='/billing' element={<><Header /><HubBilling /></>} />
          <Route exact path='/configuration' element={<><HeaderConfig /><HubConfig /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
