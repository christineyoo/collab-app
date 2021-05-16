import React, { Component } from 'react';

class Comment extends Component {
  state = {};
  render() {
    return (
      <>
        <label htmlFor='comment'>Comment</label>
        <input
          id='comment'
          type='text'
          name='comment'
          placeholder='Leave a comment...'
        />
        <button>Submit</button>
      </>
    );
  }
}

export default Comment;
