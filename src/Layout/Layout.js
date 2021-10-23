import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className='main-contents-container'>
        {children}
      </section>
      <Footer />
    </>
  );
};

export default Layout;
