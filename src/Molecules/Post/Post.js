import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FindGroupName from '../FindGroupName/FindGroupName';
import PropTypes from 'prop-types';
import './Post.css';
import ApiContext from '../../ApiContext';

class Post extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  static contextType = ApiContext;

  deletePostRequest = (postId, deletePostCb) => {
    fetch(`http://localhost:8000/api/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res) => {
        console.log('this.props.post_id', this.props.post_id);
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
          <section>
            <div className='post'>
              <h1>{this.props.post_name}</h1>
              <p>
                Team: <FindGroupName />
              </p>
              <p>{this.props.content}</p>
              <p>
                Posted by {this.props.author} on {this.props.modified}
              </p>
              <button
                onClick={() =>
                  this.deletePostRequest(this.props.post_id, context.deletePost)
                }
              >
                Delete
              </button>
              <Link
                to={{
                  pathname: `/post/${this.props.post_id}/edit`,
                  aboutProps: {
                    name: 'Info'
                  }
                }}
              >
                <button>Edit Post</button>
              </Link>
              <br />
              <i className='fas fa-plus-circle'></i>&nbsp; Comment
            </div>
          </section>
        )}
      </ApiContext.Consumer>
    );
  }
}

export default withRouter(Post);
