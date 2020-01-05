import React from 'react';

import logo from '../assets/aristi-logo-header.svg';
import ham from '../assets/ham.svg';
import { Link } from 'react-router-dom';
import styles from './styles.css';

function Header(){
  return (
    <div className="headerContainer">
      <img src={logo} id="mainLogo" alt="logo" />
      <nav>
        <a href="#" class="hide-desktop"/>
        <img src={ham} alt="toggle menu" class="ham" id="ham"/>
        {/* TODO min width for mobile */}
        <ul class="show-desktop hide-mobile" id="nav">
          <li><Link to="/">home</Link></li>
          <li><Link to="/packages">packages</Link></li>
          <li><Link to="/gallery">gallery</Link></li>
          <li><Link to="/about-us">about us</Link></li>
        </ul>
      </nav>
    </div>
    )
  }
  
  export default Header;