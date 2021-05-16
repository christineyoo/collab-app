import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ApiContext from '../../ApiContext';
import PropTypes from 'prop-types';

class AddComment extends Component {
  static propTypes = {
    history: PropTypes.object
  };
  static contextType = ApiContext;

  state = {
    content: ''
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
        this.props.history.push(`/all-posts`);
        addCommentCb(data, commentContent, commentAuthor, commentPostId);
      });
  };

  render() {
    return (
      <ApiContext.Consumer>
        {(context) => (
          <form onSubmit={(e) => this.handleSubmit(e, context.addComment)}>
            <label htmlFor='comment'>
              <i class='far fa-comment fa-3x'></i>
            </label>
            <textarea
              id='comment'
              name='comment'
              rows='5'
              cols='50'
              onChange={(e) => this.inputContent(e.target.value)}
              placeholder='Leave a comment...'
              required
            ></textarea>
            <button type='submit'>Submit</button>
          </form>
        )}
      </ApiContext.Consumer>
    );
  }
}

export default withRouter(AddComment);
