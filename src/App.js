import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import HeroBanner from './Components/HeroBanner/HeroBanner';
import  { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return ( 
    <Router>
      <div className="App">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="content-wrapper">
            <HeroBanner type="Model S" image="hero-banner-1" />
            <HeroBanner type="Model Y" image="hero-banner-2" />
            <HeroBanner type="Model 3" image="hero-banner-3" />
            <HeroBanner type="Model X" image="hero-banner-4" />
        </div>
      </div>
    </Router>
  );
}

export default App;
