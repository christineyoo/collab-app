import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  render() {
    return (
      <>
        <section>
          <div className='post'>
            <h1>{this.props.name}</h1>
            <p>Team: {this.props.groupId}</p>
            <p>{this.props.content}</p>
            <p>
              Posted by {this.props.author} on {this.props.modified.substring(0, 10)}
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default Post;
