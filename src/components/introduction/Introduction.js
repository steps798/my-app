import React from 'react';

import Grid from '@material-ui/core/Grid';
import icon1 from '../assets/suitcase-solid.svg';
import icon2 from '../assets/passport-solid.svg';
import icon3 from '../assets/church-solid.svg';
import styles from './styles.css';

function Introduction(){
  return (
    <div style={{flexGrow: 1, margin: '30px 0'}}>
      <Grid container spacing={3} style={{textAlign: 'center'}}>
        <Grid item xs={12} className="componentTitle" style={{ marginBottom: '20px'}}>
          <span style={{fontSize: '0.6em'}}>travel with</span>
          <p>Aristi Buana Tour</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste necessitatibus tempora debitis similique totam rerum labore inventore repellat corrupti. Eius architecto est ab voluptatum, illo eveniet tenetur aliquam repellat voluptate</span>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="iconContainer">
            <img src={icon1} className="icon" alt="suitcase" />
              <div className="description">
                <p className="descriptionTitle">Lorem Ipsum</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste necessitatibus tempora debitis similique totam rerum labore </span>
              </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="iconContainer">
            <img src={icon2} className="icon" alt="passport" style={{height: '35px'}} />
              <div className="description">
                <p className="descriptionTitle">Lorem Ipsum</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste necessitatibus tempora debitis similique totam rerum labore </span>
              </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="iconContainer">
            <img src={icon3} className="icon" alt="church" style={{width: '60px'}} />
              <div className="description">
                <p className="descriptionTitle">Lorem Ipsum</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste necessitatibus tempora debitis similique totam rerum labore </span>
              </div>
          </div>
        </Grid>
      </Grid>
    </div>
    )
  }
  
  export default Introduction;