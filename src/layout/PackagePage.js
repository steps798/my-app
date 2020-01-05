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

function PackagePage() {
  const classes = useStyles();
  return (
    <div className="PackagePage">
      {/* <div className={styles.backgroundClip}>
      </div> */}
      <div className={classes.root}> 
        <Grid container style={{paddingLeft: 0, paddingRight: 0}}>
          <Grid item xs={12} 
                style={{
                  background: 'linear-gradient(#ffffff, #F6F6F6)',
                  paddingTop: '70px'}}>
            <div className={classes.component} style={{margin: '20px 0', padding: 0}}><Package/></div>
          </Grid>
        </Grid>
      </div>

    </div>
  );
}

export default PackagePage;
