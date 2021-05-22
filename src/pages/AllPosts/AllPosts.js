import React, { Component } from 'react';
import './AllPosts.css';
import Footer from '../../Organisms/Footer/Footer.js';
import HomeButton from '../../Organisms/HomeButton/HomeButton';
import Posts from '../../Organisms/Posts/Posts.js';
import SideBar from '../../Organisms/SideBar/SideBar.js';

class AllPosts extends Component {
  render() {
    return (
      <>
      <HomeButton />
        <div id='bg'>
          <header className='all-posts'>
            <h1>All Posts</h1>
            <h2>
              Viewing all posts from your Collabmates. Select a course to filter posts.
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
