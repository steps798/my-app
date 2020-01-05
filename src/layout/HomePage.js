import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainTitle from '../components/mainTitle/MainTitle';
import Introduction from '../components/introduction/Introduction';
import Service from '../components/service/Service';
import Package from '../components/package/Package';
import style from './styles.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  defaultGridItem: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: 0
  },
  imageSlider: {
    border: 0,
    margin: 0,
    padding: 0,
    width: '100%', /* Full width (cover the whole page) */
    height: '100%', /* Full height (cover the whole page) */
  },
  component: {
    margin: '0 20px 0 20px ',
    padding: 0
  }
}));

function HomePage() {
  const classes = useStyles();
  return (
    <div className="HomePage">
      {/* <div className={styles.backgroundClip}>
      </div> */}
      <div className={classes.root}> 
        <Grid container style={{paddingLeft: 0, paddingRight: 0}}>
          {/* main title */}
          <Grid item xs={12} style={{margin: 0, padding: 0}}>
            <div className={classes.imageSlider}><MainTitle/></div>
          </Grid>
          {/* introduction */}
          <Grid item xs={12} 
                style={{
                  background: 'linear-gradient(#F6F6F6, #FFFFFF)',
                  paddingTop: '70px'}}>
            <div className={classes.component}><Introduction/></div>
          </Grid>
          {/* service */}
          <Grid item xs={12}>
            <div className={classes.component}><Service/></div>
          </Grid>
          {/* package */}
          <Grid item xs={12} 
                style={{
                  background: 'linear-gradient(#ffffff, #F6F6F6)',
                  paddingTop: '70px'}}>
            <div className={classes.component} style={{margin: '20px 0', padding: 0}}><Package/></div>
          </Grid>
          <Grid item xs={12} 
                style={{}}>
            <div className={classes.component} style={{margin: '50px 20px', padding: '10px 0', fontSize:  '1.5em', textAlign: 'center'}}>
              <p>Aliquip magna duis id deserunt dolore voluptate incididunt.</p>
              <small>Anim est fugiat irure qui velit.</small>
            </div>
          </Grid>
        </Grid>
      </div>

    </div>
  );
}

export default HomePage;
