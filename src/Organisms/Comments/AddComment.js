import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ApiContext from '../../ApiContext';
import PropTypes from 'prop-types';
import './Comments.css';

class AddComment extends Component {
  static propTypes = {
    history: PropTypes.object
  };
  static contextType = ApiContext;

  state = {
    content: {
      value: ''
    }
  };

  inputContent = (content) => {
    this.setState({
      content: {
        value: content
      }
    });
  };

  handleSubmit = (event, addCommentCb) => {
    event.preventDefault();
    const { content } = this.state;
    const commentContent = content.value;
    const commentPostId = this.props.post_id;
    const commentAuthor = 'User';
    fetch('http://localhost:8000/api/comments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        content: commentContent,
        author: commentAuthor,
        modified: '2023-05-20 23:21:26.392487+00',
        post_id: commentPostId
      })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        // window.location.reload();
        // this.props.history.push(`/post/${commentPostId}`);
        addCommentCb(data, commentContent, commentAuthor, commentPostId);
      });
  };

  clearText = () => {
  };

  render() {
    return (
      <ApiContext.Consumer>
        {(context) => (
          <form
            className='comment-card flex'
            onSubmit={(e) => this.handleSubmit(e, context.addComment)}
          >
            <label htmlFor='comment'></label>
            <textarea
              id='comment'
              className='add-comment flex-2'
              name='comment'
              rows='5'
              cols='50'
              onChange={(e) => this.inputContent(e.target.value)}
              placeholder='Leave a comment...'
              required
            ></textarea>
            <button className='add-comment flex-1' type='submit'>
              Submit
            </button>
          </form>
        )}
      </ApiContext.Consumer>
    );
  }
}

export default withRouter(AddComment);
