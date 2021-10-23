import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-website-info-container'>
        <p>&copy;{new Date().getFullYear()} by Ewhan Han <br />
          Inspired by
          <a href='https://www.wix.com/website-template/view/html/2622?siteId=7e761c3c-729b-4d4e-9dc3-a8242c486f56&metaSiteId=3f62d478-a066-43ee-98e6-3e48600ff893&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv%2Fpersonal&tpClick=view_buttonhttps://www.wix.com/website-template/view/html/2622?siteId=7e761c3c-729b-4d4e-9dc3-a8242c486f56&metaSiteId=3f62d478-a066-43ee-98e6-3e48600ff893&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv%2Fpersonal&tpClick=view_button'> Maya
            Nelson.</a>
        </p>
      </div>
      <div className='footer-website-links-container'>
        <div className='footer-website-links-col'>
          <p><b>Call</b></p>
          <p>519-639-2489</p>
        </div>
        <div className='footer-website-links-col'>
          <p><b>Email</b></p>
          <a href='mailto:ewhan.han@gmail.com'>ewhan.han@gmail.com</a>
        </div>
        <div className='footer-website-links-col'>
          <p><b>Follow</b></p>
          <div className='footer-website-links-icons'>
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
          </div>
        </div>
      </div>
    </footer>
  );

};

export default Footer;