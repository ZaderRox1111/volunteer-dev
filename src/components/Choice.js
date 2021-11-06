import '../css/choice.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';

function Choice() {
  const [show, setShow] = useState(false);
  
  return (
    <div className='all'>
      <div className='leftChoice'>
        <h2>Developer</h2>
      </div>

      <div className='rightChoice'>
      <h2>Need Help</h2>
      </div>
    </div>
  )
}

export default Choice;