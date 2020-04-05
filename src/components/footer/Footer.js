import React from 'react';

import logo from '../assets/aristi-logo-header.svg';
import home from '../assets/home-solid.svg';
import phone from '../assets/phone-solid.svg';
import mail from '../assets/envelope-open-regular.svg';
import insta from '../assets/instagram-brands.svg';
import youtube from '../assets/youtube-brands.svg';
import { IG_LINK } from '../../string.js';

import styles from './styles.css';

function Footer(){
  return (
    <div className="container">
      <div className="footer">
        <p>
        ©{new Date().getFullYear()} All rights reserved
        </p>
        <div className="socmed">
          <a href={IG_LINK} target="_blank">
            <img src={insta} alt="instagram"></img>
          </a>
          <a href="#" target="_blank">
            <img src={youtube} alt="youtube"></img>
          </a>
        </div>
      </div>
    </div>
    )
  }
  
  export default Footer;