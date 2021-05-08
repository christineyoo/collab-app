import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import Footer from '../../Organisms/Footer/Footer.js';
import Posts from '../../Organisms/Posts/Posts.js';
import './Dashboard.css';
import UserNav from '../../Organisms/Nav/UserNav.js';

class Dashboard extends Component {
  render() {
    return (
      <>
        <UserNav />
        <main>
        <header>
            <h1>Welcome, user.</h1>
            <h2>Viewing your posts.</h2>
        </header>
        <Posts />
    </main>
        <Footer />
        </>
    );
  }
}

export default Dashboard;