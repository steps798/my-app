import React from 'react';
import ReactDOM from 'react-dom'

import { Carousel } from 'react-bootstrap';
import bgImage1 from '../assets/golden_city-jerusalem.edit.jpg';
import bgImage2 from '../assets/custody__of_the_hoy_land-israel.edit.jpg';
import bgImage3 from '../assets/IMG_3731.edit.jpg';
import bgImage4 from '../assets/IMG_3649.edit.jpg';
import bgImage5 from '../assets/dolorosa.edit.jpg';
import styles from './styles.css';
import { ARISTI_TOUR } from '../../string.js';

class MainTitle extends React.Component {
  constructor(props) {
    super (props);
  }

  renderTitle() {
    return (
      <div className="mainTitle">
        <p>Make It Meaningful And Memorable in Your Travel   </p>
        <span>only with {ARISTI_TOUR}  </span>
      </div>
    )
  }

  render() {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      {/* <img src={bgImage} id="bgImage" alt="bgImage" /> */}
        { this.renderTitle() }
      <Carousel 
        style={{maxWidth: '100%'}} 
        controls={false}
        indicators={false}
        fade={true}
        interval={'3000'}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{maxWidth: '100%', height: 'auto'}}
            src={bgImage1}
            alt="image1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{maxWidth: '100%', height: 'auto'}}
            src={bgImage2}
            alt="image2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{maxWidth: '100%', height: 'auto'}}
            src={bgImage3}
            alt="image3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{maxWidth: '100%', height: 'auto'}}
            src={bgImage4}
            alt="image4"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{maxWidth: '100%', height: 'auto'}}
            src={bgImage5}
            alt="image5"
          />
        </Carousel.Item>
      </Carousel>
    </div>
    )
  }
}
  
  export default MainTitle;