import React, {useState} from 'react';
import '../images/jatcomp.jpg'
import './About.css'
import {Link} from 'react-router-dom'


export default function About() {
  return <div>
    <div className='about-header'>
      <h1 data-aos="fade-down" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">Developher J</h1>
      <h2 data-aos="fade-up" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">Aspiring Developer</h2>
      </div>
      <div className='about-mid'>
      <img src={require('../images/jatcomp.jpg')} alt="jatcomp" data-aos="fade-right" data-aos-delay="100"/>
      <h1 class="title"><span>About Me</span></h1>
      </div>
      <div className='about-info'>
      <h2 data-aos="fade-down" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">I'm J, a creative aspiring developer.</h2>
      <h3 data-aos="fade-up" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">I have been learning to code Since January 2020.
        I am very determined to make it in this industry.
      I have a passion for UI effects, animations and creating intuitive, dynamic user experiences.
      </h3>
      </div>
    <div className='about-row'>
      <div className='about-column'>
      <h2 data-aos="zoom-in-right">Background</h2>
      <p data-aos="fade-up" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">I am self taught using books and online courses. I have attained a Nandodegree in Programming from Udacity.
        Although I primarilly work as a journalist I am very determined to make it in this industry.
        I have a passion for UI effects, animations and creating intuitive, dynamic user experiences.
        I also have trainee experience in manual testing which has enabled me to foster the right mix of
        theory and practice in my projects.</p>
      </div>
      <div className='about-column'>
      <h2 data-aos="zoom-in-right" >Languages</h2>
      <p data-aos="fade-up" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">I have been learning the following programming languages.</p>
        <ul data-aos="fade-left" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">
          <li> Python </li>
          <li> HTML</li>
          <li> CSS</li>
          <li> Javascript</li>
          <li> Java</li>
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
        </ul>
      </div>
      <div className='about-column'>
      <h2 data-aos="zoom-in-right">Lets work together</h2>
      <p data-aos="fade-up" data-aos-delay="100" data-aos-once="true" data-aos-easing="linear">I am a hardworking, determined and dedicated individual. I consider myself a forever student
      and have a great passion for picking up new skills.
      I may not have work experience but I am a fast learner and willing to give 1000%.
      I just need an opportunity. If you are willing to take that change please

       <Link to="/contact" className="contact-link"> <span> don't hesitate to get in touch</span></Link>
    </p>
      </div>
    </div>
    </div>


}
