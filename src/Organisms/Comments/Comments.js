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
        return (
          <Comment
            author={comment.author}
            content={comment.content}
            modified={comment.modified}
          />
        );
      });
  };

  render() {
    return (
      <>
        {this.renderComments()}
        <form>
          <label htmlFor='comment'>
          <i class='far fa-comment fa-3x'></i>
        </label>
        <textarea
          id='comment'
          name='comment'
          rows='5'
          cols='50'
          placeholder='Leave a comment...'
        ></textarea>
        <button type='submit'>Submit</button>
        </form>
        
      </>
    );
  }
}

export default Comments;
