import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './HomeNav.css';

class HomeNav extends Component {
  render() {
    return (
      <>
        <nav>
          <NavLink exact to='/' className='flex-3'>
            Collab
          </NavLink>
          <NavLink
            to='/signup'
            activeStyle={{
              fontStyle: 'bold',
              color: '#333333',
              fontWeight: '800'
            }}
            className='flex-1'
          >
            Sign Up
          </NavLink>
          <NavLink
            to='/dashboard'
            activeStyle={{
              fontStyle: 'bold',
              color: '#333333',
              fontWeight: '800'
            }}
            className='flex-1'
          >
            Demo
          </NavLink>
        </nav>
      </>
    );
  }
}

export default HomeNav;
