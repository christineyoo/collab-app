import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class HomeNav extends Component {
  render() {
    return (
      <>
        <nav>
          <NavLink exact to='/' className='flex-1'>
            Collab
          </NavLink>
          <NavLink
            to='/all-posts'
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
