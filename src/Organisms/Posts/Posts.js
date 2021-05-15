import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import './Posts.css';
import Post from '../../Molecules/Post/Post.js';

class Posts extends Component {
  static contextType = ApiContext;

  renderPosts = () => {
    const copyPosts = this.context.posts || [];

    if (this.props.isOnGroup) {
      return copyPosts
        .filter((post) => post.group_id === +this.props.group_id)
        .map((post) => {
          return (
            <Post
              author={post.author}
              content={post.content}
              modified={post.modified}
              id={post.id}
              group_id={post.group_id}
              post_name={post.post_name}
            />
          );
        });
    } else {
      return copyPosts.map((post) => {
        return (
          <Post
            author={post.author}
            content={post.content}
            modified={post.modified}
            id={post.id}
            group_id={post.group_id}
            post_name={post.post_name}
          />
        );
      });
    }
  };

  render() {
    return <>{this.renderPosts()}</>;
  }
}

export default Posts;
