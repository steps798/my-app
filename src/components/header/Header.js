import React, { useState } from 'react';

import logo from '../assets/aristi-logo-header.svg';
import hamimg from '../assets/ham.svg';
import hamtoggleimg from '../assets/ham.svg';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import routes from '../../routes.json';

function Header(){
  const [ham, setHam] = useState(false);
  return (
    <div className="headerContainer">
      <img src={logo} id="mainLogo" alt="logo" />
      <nav>
        <input 
          type="checkbox" 
          class="hide-desktop" 
          checked={ham}
          onChange={() => setHam(!ham)}
        />
        <img src={hamimg} class="ham"/>
        <img src={hamtoggleimg} class="hamtoggle"/>
        {/* TODO fix mainTitle position/z-index */}
        <ul class="show-desktop" >
          <li onClick={() => setHam(false)}><Link to={routes.home.uri}>home</Link></li>
          <li onClick={() => setHam(false)}><Link to={routes.packages.uri}>packages</Link></li>
          {/* <li onClick={() => setHam(false)}><Link to="/gallery">gallery</Link></li>
          <li onClick={() => setHam(false)}><Link to="/about-us">about us</Link></li> */}
        </ul>
      </nav>
    </div>
    )
  }
  
  export default Header;