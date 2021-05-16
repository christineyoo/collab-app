import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
  render() {
    return (
      <div className='comment-card'>
        <p>
          <strong>{this.props.author}</strong>
        </p>
        <p>{this.props.modified}</p>
        <br />
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Comment;
