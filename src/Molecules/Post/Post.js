import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import { Link, withRouter } from 'react-router-dom';
import Comments from '../../Organisms/Comments/Comments';
import FindGroupName from '../FindGroupName/FindGroupName';
import PropTypes from 'prop-types';
import './Post.css';

class Post extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  static contextType = ApiContext;

  state = {
    areCommentsVisible: true
  };

  deletePostRequest = (postId, deletePostCb) => {
    fetch(`http://localhost:8000/api/posts/${postId}`, {
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
        deletePostCb(postId);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (
      <ApiContext.Consumer>
        {(context) => (
          <div>
            <div className='post'>
              <h1 id='post-h1'>{this.props.post_name}</h1>
              <p>
                Team:{' '}
                <strong>
                  <FindGroupName group_id={this.props.group_id} />
                </strong>
              </p>
              <p>{this.props.content}</p>
              <p>
                Posted by {this.props.author} on{' '}
                {this.props.modified.substring(0, 10)}
              </p>
              <button
                className='comment-option'
                onClick={() =>
                  this.deletePostRequest(this.props.post_id, context.deletePost)
                }
              >
                Delete
              </button>
              <Link
                to={{
                  pathname: `/post/${this.props.post_id}/edit`,
                  post_id: this.props.post_id,
                  post_name: this.props.post_name,
                  content: this.props.content,
                  author: this.props.author,
                  group_id: this.props.group_id
                }}
              >
                <button className='comment-option'>Edit Post</button>
              </Link>
              <br />
              <strong id='comment'
                onClick={() => {
                  return this.setState({
                    areCommentsVisible: !this.state.areCommentsVisible
                  });
                }}
              >
                &nbsp;{' '}
                {this.state.areCommentsVisible
                  ? <span id='font'>{'- Hide Comments'}</span>
                  : <span id='font'>{'+ Show Comments'}</span>}
              </strong>
            </div>
            {this.state.areCommentsVisible && (
              <Comments post_id={this.props.match.params.postId} />
            )}
          </div>
        )}
      </ApiContext.Consumer>
    );
  }
}

export default withRouter(Post);
