import React from 'react';
import { makeStyles } from '@mui/styles';

import Posts from '../components/Posts.js';
import NavBar from '../components/NavBar.js';
import Choice from '../components/Choice.js';
import topPic from '../img/Main_Preview.jpeg';

const useStyles = makeStyles(theme => ({
  all: {
  },

  first: {
    position: 'relative',
    top: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: '#31302e',
  },

  toppic: {
    width: '100%',
    boxShadow: '#e91e63 0 0 10px 0px'
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '50%',
    textAlign: 'center',
    color: '#FAF9F6',
  },

  maintitle: {
    fontFamily: 'Courgette, cursive',
    fontSize: '100pt',
  },

  subtitle: {
    fontFamily: 'Courgette, cursive',
    fontSize: '24pt',
  },
}))

function Home() {
  const { all, first, toppic, title, maintitle, subtitle } = useStyles();

  return (
    <div className={all}>
      <NavBar />

      <div className={first}>
        <img className={toppic} src={topPic} alt='Main'></img>
        <div className={title}>
          <h1 className={maintitle}>Volunteer Dev</h1>
          <h2 className={subtitle}>Choose to make a difference</h2>
        </div>
      </div>

      <div>
        <Choice />
      </div>

      <div>
        <Posts />
      </div>
    </div>
  )
}

export default Home;
