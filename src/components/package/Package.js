import React from 'react';

import { CardDeck, Card } from 'react-bootstrap';
import bgImage1 from '../assets/grand israel.jpg';
import bgImage2 from '../assets/old-city-jerusalem.jpg';
import bgImage3 from '../assets/jerusalem-old-city.jpg';
import bgImage4 from '../assets/dead-sea-tiberias-sea-of-galilee.jpg';
import bgImage5 from '../assets/Church_of_the_Holy_Sepulchre.jpg';
import styles from './styles.css';

function Package(){
  return (
      <div className="flex-con">
        <div className="cardContainer">
          <div className="div1">
            <p className="title">Our Packages</p>
          </div>
          <div className="div2">
            <CardDeck>
              <Card>
                <Card.Img variant="top" src={bgImage1} />
                <Card.Body>
                  <Card.Title>Package title</Card.Title>
                  <Card.Text>
                    Nulla ad irure officia incididunt proident eu mollit reprehenderit Lorem non.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={bgImage1} />
                <Card.Body>
                  <Card.Title>Package title</Card.Title>
                  <Card.Text>
                    Velit qui amet dolore cupidatat dolor aute laborum ipsum nulla proident sint qui. Pariatur ea aliqua mollit adipisicing exercitation culpa. Cupidatat aliquip quis laboris est qui pariatur. Incididunt nisi laboris nisi labore culpa dolore anim aute laboris ut enim.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={bgImage1} />
                <Card.Body>
                  <Card.Title>Package title</Card.Title>
                  <Card.Text>
                    Nulla culpa ea minim aliqua ipsum mollit eu incididunt consequat sunt. Veniam culpa nisi non enim amet eiusmod. Culpa dolor minim ea consectetur.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
        </div>
      </div>
    )
  }
  
  export default Package;