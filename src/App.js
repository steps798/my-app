import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import WhatsAppLogo from './components/assets/WhatsApp_Logo_2.png';
import './App.css';
import Page from './layout/Page';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      {/* header, consider use sticky effect */}
      <div className="header"><Header/></div>
      <Router>
        <div>
          <Route exact path="/" component={Page} />
          <Route path="/users" component={Page} />
          {/* <Route path="/contact" component={Contact} /> */}
        </div>
      </Router>
      <div className="contactContainer"><Contact/></div>
      <a 
        className="whatsappNav"
        href="https://wa.me/6281289741007?text=Saya+tertarik+dengan+Aristi+Buana+Tour%21">
        <img src={WhatsAppLogo}/>
        <span>chat on WhatsApp</span>
      </a>
      <div className="footer"><Footer/></div>
    </div>
  );
}

export default App;
