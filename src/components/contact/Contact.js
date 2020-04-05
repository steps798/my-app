import React from 'react';

import logo from '../assets/aristi-logo-header.svg';
import home from '../assets/home-solid.svg';
import phone from '../assets/phone-solid.svg';
import mail from '../assets/envelope-open-regular.svg';
import insta from '../assets/instagram-brands.svg';
import youtube from '../assets/youtube-brands.svg';
import { ARISTI_PT, ADDRESS, PHONE_PRETTY, EMAIL } from '../../string.js';

import styles from './styles.css';

function Contact(){
  return (
      <div className="logoAddress">
        <div className="center">
          <p>{ARISTI_PT}</p>
        </div>
        {/* <div className="line"></div> */}
        <div className="contact">
          <div className="iconText">
            <a>
              <img src={home} alt="home"></img>
            </a>
            <p>{ADDRESS}</p>
          </div>
          <div className="iconText">
            <a>
              <img src={phone} alt="phone"></img>
            </a>
            <p>{PHONE_PRETTY}</p>
          </div>
          <div className="iconText">
            <a>
              <img src={mail} alt="main"></img>
            </a>
            <p>{EMAIL}</p>
          </div>
        </div>
    </div>
    )
  }
  
  export default Contact;