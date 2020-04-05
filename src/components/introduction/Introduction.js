import React from 'react';

import Grid from '@material-ui/core/Grid';
import icon1 from '../assets/suitcase-solid.svg';
import icon2 from '../assets/passport-solid.svg';
import icon3 from '../assets/church-solid.svg';
import styles from './styles.css';
import { ARISTI_TOUR } from '../../string.js';

function Introduction(){
  return (
    <div style={{flexGrow: 1, margin: '30px 0'}}>
      <Grid container spacing={3} style={{textAlign: 'center'}}>
        <Grid item xs={12} className="componentTitle" style={{ marginBottom: '20px'}}>
          <span style={{fontSize: '0.8em'}}>everything in one travel</span>
          <p>{ARISTI_TOUR}</p>
          <span>Kami menyediakan layanan tour dan paket wisata ke berbagai perjuru dunia. Rasakan pengalaman yang tak terlupakan dengan layanan terjamin dan berkualitas bersama {ARISTI_TOUR}</span>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="iconContainer">
            <img src={icon2} className="icon" alt="passport" style={{height: '35px'}} />
              <div className="description">
                <p className="descriptionTitle">Fasilitas Premium</p>
                <span>Nikmati pengalaman anda dengan fasilitas premium serta tour guide dan tour leader berpengalaman pada layanan tour dan paket wisata yang kami sediakan </span>
              </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="iconContainer">
            <img src={icon1} className="icon" alt="suitcase" />
              <div className="description">
                <p className="descriptionTitle">Garansi 100% Pasti Berangkat</p>
                <span>Kami selalu memastikan perjalanan impian anda terwujud sesuai dengan layanan yang kami tawarkan </span>
              </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="iconContainer">
            <img src={icon3} className="icon" alt="church" style={{width: '60px'}} />
              <div className="description">
                <p className="descriptionTitle">Garansi Situs Lebih Banyak</p>
                <span>Lengkapi destinasi wisata anda dengan mengunjungi lebih banyak situs dan tujuan di dalam tour dan paket wisata yang tersedia </span>
              </div>
          </div>
        </Grid>
      </Grid>
    </div>
    )
  }
  
  export default Introduction;