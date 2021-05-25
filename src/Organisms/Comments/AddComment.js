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
    return content;
  };

  handleSubmit = (event, addCommentCb) => {
    event.preventDefault();
    const { content } = this.state;
    const commentContent = content.value;
    const commentPostId = this.props.post_id;
    const commentAuthor = 'User';
    fetch(`${process.env.REACT_APP_HEROKU_URL}/api/comments`, {
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
        this.setState({ content: { value: '' } });
        addCommentCb(data, commentContent, commentAuthor, commentPostId);
      });
  };

  clearText = () => {};

  render() {
    return (
      <ApiContext.Consumer>
        {(context) => (
          <form
            id='add-commment-form'
            className='comment-card flex'
            onSubmit={(e) => this.handleSubmit(e, context.addComment)}
            style={{ margin: '0 20%' }}
          >
            <label htmlFor='comment'></label>
            <input
              id='comment'
              className='add-comment flex-5'
              name='comment'
              onChange={(e) => this.inputContent(e.target.value)}
              placeholder='Leave a comment...'
              value={this.state.content.value}
              required
            ></input>
            <br />
            <button
              id='add-comment-button'
              className='add-comment flex-1'
              type='submit'
            >
              Submit
            </button>
          </form>
        )}
      </ApiContext.Consumer>
    );
  }
}

export default withRouter(AddComment);
