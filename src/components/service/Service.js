import React from 'react';

import styles from './styles.css';

const wa_link = 'https://wa.me/6281289741007?text=Halo%2C+Aristi+Buana+Tour%21+Saya+tertarik+dengan+penawaran+paket+tour+yang+tersedia.';

function Service(){
  return (
      <div className="container">
        <div className="section-header">
          <p className="title">Our Service</p>
          {/* <p className="text">Eu dolor incididunt commodo sunt. Culpa ex commodo adipisicing aliquip amet Lorem dolore do aliqua commodo velit amet. Nulla officia nisi laborum irure in aute sint incididunt deserunt eu exercitation.</p> */}
        </div>
        <div className="grid">
          <div className="div1" style={{"--aspect-ratio": 1/1}}>
            <div className="overlay">
              <p className="headerOverlay">Lorem Ipsum</p>
              <p className="textOverlay">Ad et elit qui sint magna irure ex exercitation id irure occaecat.</p>
            </div>
          </div>
          <div className="div2" style={{"--aspect-ratio": 1/1}}>
            <div className="overlay">
              <p className="headerOverlay">Lorem Ipsum</p>
              <p className="textOverlay">Ad et elit qui sint magna irure ex exercitation id irure occaecat.</p>
            </div>
          </div>
          <div className="div3" style={{"--aspect-ratio": 1/1}}>
            <div className="overlay">
              <p className="headerOverlay">Lorem Ipsum</p>
              <p className="textOverlay">Ad et elit qui sint magna irure ex exercitation id irure occaecat.</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
  
  export default Service;