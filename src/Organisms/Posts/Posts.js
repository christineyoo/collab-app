import React, { Component } from 'react';
import './Posts.css';
import Post from '../../Molecules/Post/Post.js';

class Posts extends Component {
  renderPosts = () => {
    const posts = [
      {
        id: 1,
        title: 'Post One',
        group: 'Math Department',
        content:
          'This is the content for post 1. There is a lot to consider. Note that this announcement will be repeated during the meeting.',
        date: '05-15-2021',
        author: 'Christine Yoo'
      },
      {
        id: 2,
        title: 'Post Two',
        group: 'Algebra 1',
        content:
          'This is the content for post 2. There is a lot to consider. Note that this announcement will be repeated during the meeting.',
        date: '05-10-2021',
        author: 'Christine Yoo'
      },
      {
        id: 3,
        title: 'Post Three',
        group: 'Algebra 2',
        content:
          'This is the content for post 3. There is a lot to consider. Note that this announcement will be repeated during the meeting.',
        date: '05-08-2021',
        author: 'Christine Yoo'
      },
      {
        id: 4,
        title: 'Post Four',
        group: 'Algebra 2',
        content:
          'This is the content for post 4. There is a lot to consider. Note that this announcement will be repeated during the meeting.',
        date: '05-05-2021',
        author: 'Christine Yoo'
      }
    ];

    return posts.map((post) => {
      return (
        <Post
          author={post.author}
          content={post.content}
          date={post.date}
          id={post.id}
          group={post.group}
          title={post.title}
        />
      );
    });
  };

  render() {
    return <>{this.renderPosts()}</>;
  }
}

export default Posts;
