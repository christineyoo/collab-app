import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  render() {
    return (
      <>
        <section>
          <div className='post'>
            <h1>{this.props.post_name}</h1>
            <p>Team: {this.props.group_id}</p>
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
