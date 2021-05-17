import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import AddComment from './AddComment';
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
            comment_id={comment.id}
          />
        );
      });
  };

  render() {
    return (
      <>
        {this.renderComments()}
        <AddComment post_id={this.props.post_id} />
      </>
    );
  }
}

export default Comments;
