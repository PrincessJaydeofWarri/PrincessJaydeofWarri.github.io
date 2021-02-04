import React from 'react';
import '../images/jatcomp.jpg'
import './About.css'
import {Link} from 'react-router-dom'


export default function About() {
  return <div>
    <div className='about-container'>
    <div className='about-header'>
      <h1 data-aos="fade-down" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">Developher J</h1>
      <h2 data-aos="fade-up" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">Freelance Web Developer</h2>
      </div>
      <div className='about-mid'>
      <img src={require('../images/jatcomp.jpg')} alt="jatcomp" data-aos="fade-right" data-aos-delay="100"/>
      <h1 class="title"><span>About Me</span></h1>
      </div>
      <div className='about-info'>
      <h2 data-aos="fade-down" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">I'm J, a creative web developer.</h2>
      <h3 data-aos="fade-up" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">I craft beautiful, bespoke and fully responsive websites.
        I have a passion for UI effects, animations and creating intuitive, dynamic user experiences.
      </h3>
      </div>
    <div className='info-container'>
    <div className='about-row'>
      <div className='about-column'>
      <h2 data-aos="zoom-in-right">Background</h2>
      <p data-aos="fade-up" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">
        I am self taught using books and coding bootcamps. I have attained a Nandodegree in Programming from Udacity.
        I also have trainee experience in manual testing which has enabled me to foster the right mix of
        theory and practice in my projects.</p>
      </div>
      <div className='about-column'>
      <h2 data-aos="zoom-in-right" >Languages</h2>
      <p data-aos="fade-up" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">I have been learning the following programming languages.</p>
        <ul data-aos="fade-left" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">
          <li> Javascript </li>
          <li> HTML</li>
          <li> CSS</li>
          <li> Java</li>
          <li> Python</li>
          <li> Bashscript</li>
        </ul>
      </div>
      <div className='about-column'>
      <h2 data-aos="zoom-in-right">Platforms</h2>
      <p data-aos="fade-up" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">I also use the following platforms and tools</p>
        <ul data-aos="fade-right" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">
          <li>React</li>
          <li>Version Control with Git</li>
          <li>Node Js</li>
          <li>Selenium Webdriver</li>
          <li>Cucumber</li>
          <li>Cypress</li>
          <li>Express</li>
          <li>Redux</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className='about-column'>
      <h2 data-aos="zoom-in-right">Lets work together</h2>
      <p data-aos="fade-up" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">I am a hardworking, determined and dedicated individual. I consider myself a forever student
      and have a great passion for picking up new skills.
      Please

       <Link to="/contact" className="contact-link"> <span> don't hesitate to get in touch</span></Link>
    </p>
      </div>
    </div>
    </div>
  </div>
    </div>


}
