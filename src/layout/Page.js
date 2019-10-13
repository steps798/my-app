import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from '../components/header/Header';
import MainTitle from '../components/mainTitle/MainTitle';
import Introduction from '../components/introduction/Introduction';
import Service from '../components/service/Service';
import Package from '../components/package/Package';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import WhatsAppLogo from '../components/assets/WhatsApp_Logo_2.png';
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
  header: {
    border: 0,
    position: 'absolute', /* Sit on top of the page content */
    // display: none; /* Hidden by default */
    width: '100%', /* Full width (cover the whole page) */
    height: '100%', /* Full height (cover the whole page) */
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2 /* Specify a stack order in case you're using a different order for other elements */
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

function Page() {
  const classes = useStyles();
  return (
    <div className="Page">
      {/* <div className={styles.backgroundClip}>
      </div> */}
      <div className={classes.root}> 
        <Grid container style={{paddingLeft: 0, paddingRight: 0}}>
          {/* header, consider use sticky effect */}
          <Grid item xs={12} style={{margin: 0, padding: 0, position: 'relative'}}>
            <div className={classes.header}><Header/></div>
          </Grid>
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
          {/* footer */}
          <Grid item xs={12} 
                style={{
                  background: 'linear-gradient(#ffffff, #8a8a8a, #6f6f6f, #4a4a4a)', 
                  color: '#b4b4b4',
                  paddingTop: '70px'}}>
            <div className={classes.component}><Contact/></div>
          </Grid>
          <Grid item xs={12} 
                style={{
                  backgroundColor: '#4a4a4a', 
                  color: '#b4b4b4',
                  paddingTop: '20px'}}>
            <div className={classes.component}><Footer/></div>
          </Grid>
          {/* component 1 */}
          {/* <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid> */}
          {/* component 2 */}
          {/* <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid> */}
          {/*  */}
          {/* <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid> */}
          {/* main title */}
          {/* <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid> */}
          {/* main title */}
          {/* <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid> */}
          {/* main title */}
          {/* <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid> */}
        </Grid>
      </div>
      <a 
        className="whatsappNav"
        href="https://wa.me/6281289741007?text=Saya+tertarik+dengan+Aristi+Buana+Tour%21">
        <img src={WhatsAppLogo}/>
        <span>chat on WhatsApp</span>
      </a>
    </div>
  );
}

export default Page;
