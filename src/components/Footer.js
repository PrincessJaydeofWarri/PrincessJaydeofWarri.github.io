import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading' data-aos="fade-down" data-aos-delay="100">
        I want to work with YOU!
        </p>
        <p className='footer-subscription-text' data-aos="fade-up" data-aos-delay="100">I believe I have a lot of transferable skills to offer and an eagerness and willigness to learn. Please do not hesitate to contact me</p>
      </section>
      <div className='contact-container'>
        <Link className='social-icon-link instagram'
        href={'//www.instagram.com/developherj'}
        rel='noopener noreferrer'
        target='_blank'
        aria-label='Instagram'>


        </Link>
      </div>
      <div className='footer-links'>
        <div className='footer-links-wrapper'>
          <div className='footer-links-items'>
            <h2 data-aos="fade-left" data-aos-delay="100">Explore</h2>
            <Link to='/about' data-aos="fade-right" data-aos-delay="100">About</Link>
            <Link to='/work' data-aos="fade-right" data-aos-delay="100">Work</Link>
            <Link to='/contact' data-aos="fade-right" data-aos-delay="100">Contact</Link>

          </div>
          <div className='footer-links-items'>
            <h2 data-aos="fade-left" data-aos-delay="100">Social Media</h2>
            <Link to={"//www.instagram.com/developherj/"} target='_blank' data-aos="fade-right" data-aos-delay="100">Instagram</Link>
            <Link to={"//www.github.com/princessjaydeofwarri"} target="_blank" data-aos="fade-right" data-aos-delay="100">Github</Link>
            <Link to={"//www.twitter.com/developherj"} target="_blank" data-aos="fade-right" data-aos-delay="100">Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/'className='social-logo'>
                <img src={require("./images/dloglow1.png")} alt="jayde-logo"/>
              </Link>
            </div>
            <small className='website-rights'>© Developherj 2020 | All Rights Reserved</small>
              <div className='social-icons'>
                <Link className='social-icon-link instagram'
                  to={"//www.instagram.com/developherj/"}
                rel='noopener noreferrer'
                target="_blank"
                aria-label="Instagram">
                  <i class='fab fa-instagram'/>
                </Link>
                <Link
                  to={"//www.github.com/princessjaydeofwarri"}
              class='social-icon-link github'
              target='_blank'
              aria-label='github'
            >
              <i class='fab fa-github'/>
            </Link>
            <Link
              class='social-icon-link twitter'
              to={"//www.twitter.com/developherj"}
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter'/>
            </Link>

          </div>
        </div>
      </section>


      </div>



  )

}

export default Footer
