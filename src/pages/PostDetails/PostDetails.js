import React, { Component } from 'react';
import Footer from '../../Organisms/Footer/Footer.js';
import SideBar from '../../Organisms/SideBar/SideBar.js';
import UserNav from '../../Organisms/Nav/UserNav.js';

class PostDetails extends Component {
  render() {
    return (
      <>
        <UserNav />
        <main>
          <header className='header'>
            <h1>Post Details</h1>
            <h2>Stay in the loop by following comment threads.</h2>
          </header>
          <div className='flex-container'>
            <div className='flex-1'>
              <SideBar />
            </div>
            <div className='flex-3'>{'da note go here'}</div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default PostDetails;
