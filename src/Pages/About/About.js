import React from 'react';
import { FaInstagram, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import './About.css';

// https://www.wix.com/website-template/view/html/2622?siteId=7e761c3c-729b-4d4e-9dc3-a8242c486f56&metaSiteId=3f62d478-a066-43ee-98e6-3e48600ff893&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv%2Fpersonal&tpClick=view_buttonhttps://www.wix.com/website-template/view/html/2622?siteId=7e761c3c-729b-4d4e-9dc3-a8242c486f56&metaSiteId=3f62d478-a066-43ee-98e6-3e48600ff893&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv%2Fpersonal&tpClick=view_button
const About = () => {
  return (
    <section className='hero-container'>
      <div className='profile-container'>
        <div className='profile-details'>
          <img
            src='https://static.wixstatic.com/media/2e2a49_bd3a1599bc1b4265a01b2754b99b8536~mv2_d_5760_3840_s_4_2.jpeg/v1/crop/x_2703,y_43,w_2199,h_2205/fill/w_205,h_205,al_c,q_80,usm_0.66_1.00_0.01/AdobeStock_230407429.webp'
            alt='test'
            width='205'
            height='205'
          />
          <h1>
            Ewhan <br /> Han
          </h1>
          <div className='underline' />
          <p>
            <span>software engineering student</span>
          </p>
          <div className='profile-details-footer'>
            <div className='profile-details-social-links'>
              <a
                href='https://www.linkedin.com/in/ewhanhan/'
                className='profile-details-social-link'
              >
                <FaLinkedin className='social-icon' />
              </a>
              <a
                href='https://instagram.com/bichon_rufus'
                className='profile-details-social-link'
              >
                <FaInstagram className='social-icon' />
              </a>
              <a
                href='mailto:ewhan.han@gmail.com'
                className='profile-details-social-link'
              >
                <FaMailBulk className='social-icon' />
              </a>
            </div>
          </div>
        </div>
        <div className='profile-greeting'>
          <div className='profile-greeting-header'>
            <h1>Hello! (World)</h1>
            <p>Here's who I am & what I do</p>
          </div>
          <div className='profile-greeting-links'>
            <NavLink to='/resume' exact>RESUME</NavLink>
            <NavLink to='/projects' exact>PROJECTS</NavLink>
          </div>
          <div className='profile-greeting-bio'>
            <p>
              My name is Ewhan Han and I am a fourth-year Software Engineering
              Student at Western University!
            </p>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
