import React from 'react';
import './Main.css'
import MainItem from './Mainitem'

function Main() {
  return (
    <div className='main'>
      <h1 data-aos="fade-right" data-aos-delay="100">Check out some of my work!</h1>
      <div className='main__container'>
        <div className='main__wrapper'>
          <ul className='main__items'>
          <MainItem
          src="/images/dhjwp.png"
          text="Repsonsive website I put together using Javascript and React"
          label='developherj.com'
          path='./work'
          />
          </ul>
        </div>
      </div>
    </div>

  )

}

export default Main
