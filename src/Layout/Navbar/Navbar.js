import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <header className='navbar-container'>
      <nav className='navbar-center'>
        <div className='navbar-header'>
          <span>
            <h1>Ewhan Han</h1>
            <h3>/STUDENT</h3>
          </span>
        </div>
        <nav className='navbar-navlinks-group'>
          <ul className='navbar-navlinks'>
            <li>
              <NavLink to='/' activeClassName='navbar-navlink-selected' exact>
                ABOUT ME
              </NavLink>
            </li>
            <li>
              <NavLink to='/resume'
                       activeClassName='navbar-navlink-selected'
                       exact>
                RESUME
              </NavLink>
            </li>
            <li>
              <NavLink to='/projects'
                       activeClassName='navbar-navlink-selected'
                       exact>
                PROJECTS
              </NavLink>
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  );

};

export default Navbar;