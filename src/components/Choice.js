import '../css/choice.css';
import React from 'react';
import Button from '@mui/material/Button';

function Choice() {
  return (
    <div className='all'>
      <div className='leftChoice'>
        <div className='leftoverlay'>
          <h2 className='choice'>Developer</h2>

          <div className='choicetext'>
            <h3>Want to feel like you are making a difference in other people's lives and in the world?</h3>
            <h3>Want to build your portfolio with real life experience?</h3>
            <h3>Want to help somebody in need?</h3>

            <div style={{marginTop:'75px'}}>
              <Button className='choicebtn' variant='outlined' size='large'>Find a Post!</Button>
            </div>
          </div>
        </div>
      </div>

      <div className='rightChoice'>
        <div className='rightoverlay'>
          <h2 className='choice'>Help Needed</h2> 

          <div className='choicetext'>
            <h3>Are you a low-budget organization that can't afford to hire a professional developer to fulfill some need?</h3>
            <h3>Want to give a software developer a chance to build their work experience and resume?</h3>
            <h3>Do you need somebody to help you make a difference?</h3>

            <div style={{marginTop:'75px'}}>
              <Button className='choicebtn' variant='outlined' size='large' color='secondary'>Make a Post!</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choice;