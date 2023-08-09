import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
      <nav
        className='navbar  bg-dark navbar-expand-lg bg-body-tertiary'
        data-bs-theme='dark'
      >
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Navbar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink
                  to='/'
                  className='nav-link'
                  exact
                  activeClassName='active'
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/about'
                  className='nav-link'
                  activeClassName='active'
                >
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/contact'
                  className='nav-link'
                  activeClassName='active'
                >
                  Contact
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/customers'
                  className='nav-link'
                  activeClassName='active'
                >
                  Customers
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/playground'
                  className='nav-link'
                  activeClassName='active'
                >
                  Playground
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
