import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './Header.css'
import Background from './images/background.png'




const Header = () => {
  return(
    <div className='header-container'>
    <img src={Background} alt="jayde-logo"/>
    <h1 data-aos="fade-down" data-aos-delay="100">Hi, I'm Jayde </h1>
    <p data-aos="fade-up" data-aos-delay="100">A freelance Web Developer.</p>
    <div className='head-btns'>
      <Link to="/about" className="btn-mobile">
      <Button
        href="/about"
      className='btns'
      buttonStyle="btn--outline"
      buttonSize="btn--large"
      >
      MY STORY
      </Button>
    </Link>
    <Link to="/contact" className='btn-mobile'>
      <Button
      className='btns'
      buttonStyle="btn--primary"
      buttonSize="btn--large"
      onClick={console.log('hey')}>
       <i className="fas fa-phone-alt"/> CONTACT
      </Button>
    </Link>
    </div>
  </div>
)
}

export default Header
