import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import WhatsAppLogo from './components/assets/WhatsApp_Logo_2.png';
import './App.css';
import HomePage from './layout/HomePage';
import PackagePage from './layout/PackagePage';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import { WA_LINK } from './string.js';

function App() {
  return (
    <div className="App">
      <Router>
        {/* header, consider use sticky effect */}
        <div className="header">
          <Header/>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/packages" component={PackagePage} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Switch>
      <div className="contactContainer"><Contact/></div>
      <a 
        className="whatsappNav"
        href={WA_LINK}>
        <img src={WhatsAppLogo}/>
        <span>chat on WhatsApp</span>
      </a>
      <div className="footer"><Footer/></div>
      </Router>
    </div>
  );
}

export default App;
