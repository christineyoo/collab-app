import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './UserNav.css';

class UserNav extends Component {
  render() {
    return (
      <>
        <nav>
          <NavLink
            exact
            to='/'
            activeStyle={{
              fontStyle: 'bold',
              color: '#333333',
              fontWeight: '800'
            }}
            className='flex-3'
          >
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
            All Posts
          </NavLink>
          <NavLink
            to='/add-post'
            activeStyle={{
              fontStyle: 'bold',
              color: '#333333',
              fontWeight: '800'
            }}
            className='flex-1'
          >
            Add Post
          </NavLink>
        </nav>
      </>
    );
  }
}

export default UserNav;
