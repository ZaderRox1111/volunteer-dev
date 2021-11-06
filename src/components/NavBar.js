import '../css/NavBar.css';
import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function NavBar() {
  const [show, setShow] = useState(false);
  
  const signOut = () => {
    try {
      Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  const navbarControl = () => {
    if (window.scrollY < 100) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarControl)
    return () => window.removeEventListener('scroll', navbarControl)
  }, []);

  return (
    <div className={`navbar ${show && 'nav_back'}`}>
      <Link to='/' style={{textDecoration: 'none'}}>
        <h1 className={`title ${show && 'title_back'}`}>Volunteer Dev</h1>
      </Link>

      <div className={`right ${show && 'right_back'}`}>
        <h1>Post</h1>
        <h1>Find Posts</h1>
        <Button className='signout' variant={show ? 'contained' : 'outlined'} onClick={signOut}>Sign Out</Button>
      </div>
    </div>
  )
}

export default NavBar;
