import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  render() {
    return (
      <>
        <section>
          <div className='post'>
            <h1>{this.props.title}</h1>
            <p>Team: {this.props.group}</p>
            <p>{this.props.content}</p>
            <p>
              Posted by {this.props.author} on {this.props.date}
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default Post;
