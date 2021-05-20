import React, { Component } from 'react';
import './AllPosts.css';
import Footer from '../../Organisms/Footer/Footer.js';
import Posts from '../../Organisms/Posts/Posts.js';
import SideBar from '../../Organisms/SideBar/SideBar.js';
import UserNav from '../../Organisms/Nav/UserNav.js';

class AllPosts extends Component {
  render() {
    return (
      <>
        <UserNav />
        <div id='bg'>
          <header className='all-posts'>
            <h1 className='all-posts'>All Posts</h1>
            <h2>
              Viewing recent posts from your Collabmates. Select a course to
              filter posts.
            </h2>
          </header>
          <div className='flex-container'>
            <div className='flex-1'>
              <SideBar />
            </div>
            <div className='flex-3'>
              <Posts />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default AllPosts;
