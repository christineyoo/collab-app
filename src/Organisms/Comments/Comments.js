import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import Comment from '../../Molecules/Comment/Comment';

class Comments extends Component {
  static contextType = ApiContext;

  renderComments = () => {
    const copyComments = this.context.comments || [];

    return copyComments
      .filter((comment) => comment.post_id === +this.props.post_id)
      .map((comment) => {
        return <Comment 
          author={comment.author}
          content={comment.content}
          modified={comment.modified}
        />;
      });
  };

  render() {
    return (
      <>
      {this.renderComments()}
        <label htmlFor='comment'>&nbsp; Comment</label>
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

export default Comments;
