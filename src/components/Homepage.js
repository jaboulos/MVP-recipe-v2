import React from 'react';
import '../App.css';

export default () => {
  return (
    <div className='homepage'>
      <div className='homepage-greeting'>
        THIS IS THE HOME PAGE
      </div>
      <div>
      <img
        className='homepage-image'
        alt='Homepage'
        src={`${'https://s3.us-east-2.amazonaws.com/mvp-tracks/guy-cooking.jpeg'}`}
      />
      </div>
    </div>
  )
}