import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';
import Footer from '../../Organisms/Footer/Footer.js';
import Posts from '../../Organisms/Posts/Posts.js';
import UserNav from '../../Organisms/Nav/UserNav.js';

class Dashboard extends Component {
  render() {
    return (
      <>
        <UserNav />
        <main>
          <header>
            <h1>Chris's Dashboard.</h1>
            <h2>Viewing your posts.</h2>
            <h3>Visit your teams:</h3>
            <div className='flex'>
            <span className='flex-2'></span>
              <button className='flex-1'>
                <NavLink to='/group/1'>Algebra 1</NavLink>
              </button>
              <button className='flex-1'>
                <NavLink to='/group/3'>Algebra 2</NavLink>
              </button>
              <span className='flex-2'></span>
            </div>
          </header>
          <Posts isOnDash />
        </main>
        <Footer />
      </>
    );
  }
}

export default Dashboard;
