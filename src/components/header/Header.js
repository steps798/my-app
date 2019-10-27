import React from 'react';

import logo from '../assets/aristi-logo-header.svg';
import ham from '../assets/ham.svg';
import styles from './styles.css';

function Header(){
  return (
    <div className="headerContainer">
      <img src={logo} id="mainLogo" alt="logo" />
      <nav>
        <a href="#" class="hide-desktop"/>
        <img src={ham} alt="toggle menu" class="ham" id="ham"/>
        <ul class="show-desktop hide-mobile" id="nav">
          <li><a href="#">home</a></li>
          <li><a href="#">services</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </nav>
    </div>
    )
  }
  
  export default Header;