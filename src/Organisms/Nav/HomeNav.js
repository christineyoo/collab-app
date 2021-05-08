import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './HomeNav.css';

class HomeNav extends Component {
  render() {
    return (
      <>
        <nav>
          <NavLink to='/' className='flex-3'>
            Collab
          </NavLink>
          <NavLink to='/signup' className='flex-1'>
            Sign Up
          </NavLink>
          <NavLink to='/dashboard' className='flex-1'>
            Demo
          </NavLink>
        </nav>
      </>
    );
  }
}

export default HomeNav;
