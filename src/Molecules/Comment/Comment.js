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
    fetch(`http://localhost:8000/api/comments/${commentId}`, {
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
        this.props.history.push('/all-posts');
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
            <p>
              <strong>{this.props.author}</strong>
            </p>
            <p>{this.props.modified}</p>
            <br />
            <p>{this.props.content}</p>
            <button
              onClick={() =>
                this.deleteCommentRequest(
                  this.props.comment_id,
                  context.deleteComment
                )
              }
            >
              Delete comment
            </button>
          </div>
        )}
      </ApiContext.Consumer>
    );
  }
}

export default withRouter(Comment);
