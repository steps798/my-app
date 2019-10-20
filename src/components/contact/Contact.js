import React from 'react';

import logo from '../assets/aristi-logo-header.svg';
import home from '../assets/home-solid.svg';
import phone from '../assets/phone-solid.svg';
import mail from '../assets/envelope-open-regular.svg';
import insta from '../assets/instagram-brands.svg';
import youtube from '../assets/youtube-brands.svg';

import styles from './styles.css';

function Contact(){
  return (
      <div className="logoAddress">
        <div className="center">
          <p>PT Aristi Buana Tour</p>
        </div>
        {/* <div className="line"></div> */}
        <div className="contact">
          <div className="iconText">
            <a href="#">
              <img src={home} alt="home"></img>
            </a>
            <p>address street</p>
          </div>
          <div className="iconText">
            <a href="#">
              <img src={phone} alt="phone"></img>
            </a>
            <p>+62 8123 4567</p>
          </div>
          <div className="iconText">
            <a href="#">
              <img src={mail} alt="main"></img>
            </a>
            <p>hello@aristibuana.co.id</p>
          </div>
        </div>
    </div>
    )
  }
  
  export default Contact;