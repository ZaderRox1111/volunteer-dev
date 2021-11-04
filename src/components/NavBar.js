import '../css/NavBar.css';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [show, setShow] = useState(false);

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
    </div>
  )
}

export default NavBar;
