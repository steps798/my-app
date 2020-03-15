import React from 'react';
import ReactDOM from 'react-dom'

import { Carousel } from 'react-bootstrap';
import bgImage1 from '../assets/grand israel.jpg';
import bgImage2 from '../assets/old-city-jerusalem.jpg';
import bgImage3 from '../assets/jerusalem-old-city.jpg';
import bgImage4 from '../assets/dead-sea-tiberias-sea-of-galilee.jpg';
import bgImage5 from '../assets/Church_of_the_Holy_Sepulchre.jpg';
import styles from './styles.css';

const blabla = <div className="mainTitle"/>

class MainTitle extends React.Component {
  constructor(props) {
    super (props);
  }

  renderTitle() {
    return (
      <div className="mainTitle">
          <p>Feel His Enormous Love through Trip to Holy Land</p>
          <span>only with Aristi Buana Tour</span>
        </div>
    )
  }

  render() {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      {/* <img src={bgImage} id="bgImage" alt="bgImage" /> */}
        <div className="mainTitle">
          <p>Feel His Enormous Love through Trip to Holy Land</p>
          <span>only with Aristi Buana Tour</span>
        </div>
      <Carousel 
        style={{maxWidth: '100%'}} 
        controls={false}
        indicators={false}
        fade={true}
        interval={'3000'}
      >
        {/* <div className="mainTitle">
          <p>Feel His Enormous Love through Trip to Holy Land</p>
          <span>only with Aristi Buana Tour</span>
        </div> */}
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