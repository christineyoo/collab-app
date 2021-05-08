import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './UserNav.css';

class UserNav extends Component {
  render() {
    return (
      <>
        <nav>
          <NavLink to='/' className='flex-3'>
            Collab
          </NavLink>
          <NavLink to='/dashboard' className='flex-1'>
            Dashboard
          </NavLink>
          <NavLink to='/all-posts' className='flex-1'>
            All Posts
          </NavLink>
          <NavLink to='/add-post' className='flex-1'>
            Add Post
          </NavLink>
        </nav>
      </>
    );
  }
}

export default UserNav;
