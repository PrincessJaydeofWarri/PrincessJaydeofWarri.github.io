import React from 'react';
import '../../App.css'
import './Contact.css'




export default function Contact() {
  return <div>
    <div className='contact-details'>
      <h1 data-aos="fade-down" data-aos-delay="100">Lets build something great together</h1>
      <p data-aos="fade-up" data-aos-delay="100">Please dont hesitate to get in touch using my details below.</p>
    </div>
    <div className='contact-container'>
    <div className='contact-row'>
      <div className='contact-column'>
      	<i class="fas fa-envelope-open-text" data-aos="flip-right" data-aos-delay="100"/>
        <h2>Email</h2>
        <a href="mailto:developherj@gmail.com?Subject=General%20Enquiry" className='mail'><p data-aos="fade-right" data-aos-delay="100">developherj@gmail.com
      </p></a>
      </div>
      <div className='contact-column'>
        <i class="fas fa-phone" data-aos="flip-right" data-aos-delay="100"/>
        <h2>Telephone</h2>
        <a href="tel:++447521468240">
          <p data-aos="fade-up" data-aos-delay="100"> +447 521 468 240</p>
          </a>
      </div>
      <div className='contact-column'>
        <i className="fab fa-instagram" data-aos="flip-right" data-aos-delay="100"/>
        <h2>Instagram</h2>
        <a href="https://www.instagram.com/developherj/" target="_blank" rel="noopener noreferrer"><p data-aos="fade-left" data-aos-delay="100">Developherj</p>
        </a>
    </div>
    </div>
    </div>
</div>
 }
