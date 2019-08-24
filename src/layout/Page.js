import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './styles.css';
import Header from '../components/header/Header';
import MainTitle from '../components/mainTitle/MainTitle';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: 0
  },
}));

function Page() {
  const classes = useStyles();
  return (
    <div className="Page">
      <div className={styles.backgroundClip}>
      </div>
      <div className={classes.root}> 
      <Grid container spacing={3}>
        {/* header, consider use sticky effect */}
        <Grid item xs={12}>
          <div className={classes.paper}><Header/></div>
        </Grid>
        {/* main title */}
        <Grid item xs={12}>
          <div><MainTitle/></div>
        </Grid>
        {/* component 1 */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        {/* component 2 */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        {/*  */}
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        {/* main title */}
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        {/* main title */}
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        {/* main title */}
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default Page;
