import React, { Component } from 'react';
import ApiContext from '../../ApiContext.js';
import Footer from '../../Organisms/Footer/Footer.js';
import Post from '../../Molecules/Post/Post';
import SideBar from '../../Organisms/SideBar/SideBar.js';
import UserNav from '../../Organisms/Nav/UserNav.js';

class PostDetails extends Component {
  static contextType = ApiContext;

  displayPost = () => {
    const copyPosts = this.context.posts || [];
    const filteredPost = copyPosts.filter(
      (post) => +post.id === +this.props.match.params.postId
    );
    const formattedFilteredPost = filteredPost.map((post, i) => {
      return (
        <ApiContext.Consumer key={i}>
          {(context) => (
            <Post
              post_id={this.props.match.params.postId}
              post_name={post.post_name}
              content={post.content}
              modified={post.modified}
              author={post.author}
              group_id={post.group_id}
            />
          )}
        </ApiContext.Consumer>
      );
    });
    return formattedFilteredPost;
  };
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
            <div className='flex-3'>{this.displayPost()}</div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default PostDetails;
