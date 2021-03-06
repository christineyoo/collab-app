import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import { withRouter } from 'react-router-dom';
import './Comment.css';
import PropTypes from 'prop-types';

class Comment extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  static contextType = ApiContext;

  deleteCommentRequest = (commentId, deleteCommentCb) => {
    fetch(`${process.env.REACT_APP_HEROKU_URL}/api/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((data) => {
        // this.props.history.push(`/post/${this.props.post_id}`);
        deleteCommentCb(commentId);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <ApiContext.Consumer>
        {(context) => (
          <div className='comment-card'>
              <p className='comment'>
                <strong>{this.props.author}</strong> {' on '}{' '}
                <span id='modified'>{this.props.modified.substring(0, 10)}</span>
                <br />
                {this.props.content}
              </p>
              <i
                className='far fa-trash-alt fa-5x'
                onClick={() =>
                  this.deleteCommentRequest(
                    this.props.comment_id,
                    context.deleteComment
                  )
                }
              ></i>
          </div>
        )}
      </ApiContext.Consumer>
    );
  }
}

export default withRouter(Comment);
