import React from 'react';
import './App.css';
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, Signup, Account } from './Containers';

function App() {
  return ( 
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/teslaaccount" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
