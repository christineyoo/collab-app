import React, { Component } from 'react';
import './AddPost.css';
import ApiContext from '../../ApiContext.js';
import Footer from '../../Organisms/Footer/Footer.js';
import PropTypes from 'prop-types';
import UserNav from '../../Organisms/Nav/UserNav.js';
import ValidationError from '../../ValidationError/ValidationError';

class AddPost extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  static contextType = ApiContext;
  state = {
    title: {
      value: '',
      touched: false
    },
    content: {
      value: '',
      touched: false
    },
    group: {
      value: 1,
      touched: false
    },
    author: {
      value: '',
      touched: false
    }
  };

  // Functions to change the state
  inputPostName = (title) => {
    this.setState({
      title: {
        value: title,
        touched: true
      }
    });
  };

  inputContent = (content) => {
    this.setState({
      content: {
        value: content,
        touched: true
      }
    });
  };

  inputGroup = (group) => {
    this.setState({
      group: {
        value: group,
        touched: true
      }
    });
  };

  inputAuthor = (author) => {
    this.setState({
      author: {
        value: author,
        touched: true
      }
    });
  };

  // Validation functions for title, content, and author fields
  validateTitle = () => {
    const title = this.state.title.value.trim();
    if (title.length === 0) {
      return 'A title is required.';
    }
  };

  validateContent = () => {
    const content = this.state.content.value.trim();
    if (content.length === 0) {
      return 'Content is required.';
    }
  };

  validateAuthor = () => {
    const author = this.state.author.value.trim();
    if (author.length === 0) {
      return 'An author is required.';
    }
  };

  renderOptions = () => {
    const copyGroups = this.context.groups || [];
    const groupOptions = copyGroups.map((group, i) => {
      return <option value={i + 1}>{group.group_name}</option>;
    });
    return groupOptions;
  };

  handleSubmit = (event, addPostCb) => {
    event.preventDefault();
    const { title, content, group, author } = this.state;
    const postTitle = title.value;
    const postContent = content.value;
    const postGroup = group.value;
    const postAuthor = author.value;
    const postModified = '2021-05-20 23:21:26.392487+00';
    fetch('http://localhost:8000/api/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        post_name: postTitle,
        content: postContent,
        group_id: +postGroup,
        author: postAuthor,
        modified: postModified
      })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        this.props.history.push('/all-posts');
        addPostCb(
          data,
          postTitle,
          postContent,
          postGroup,
          postAuthor,
          postModified
        );
      });
  };

  render() {
    return (
      <ApiContext.Consumer>
        {(context) => (
          <>
            <UserNav />
            <div id='add-post-bg'>
              <div className='add-post'>
                <header className='header'>
                  <h1 id='add-post-h1'>Add a new post</h1>
                  <br />
                  <form onSubmit={(e) => this.handleSubmit(e, context.addPost)}>
                    <div className='field'>
                      <label htmlFor='title'>Title</label>
                      <br />
                      <input
                        id='title'
                        type='text'
                        name='title'
                        onChange={(e) => this.inputPostName(e.target.value)}
                        required
                      />
                    </div>
                    <br />
                    {this.state.title.touched && (
                      <ValidationError message={this.validateTitle()} />
                    )}
                    <div className='field'>
                      <label htmlFor='content'>Content</label>
                      <br />
                      <textarea
                        id='content'
                        name='content'
                        rows='15'
                        cols='100'
                        onChange={(e) => this.inputContent(e.target.value)}
                      ></textarea>
                    </div>
                    <br />
                    {this.state.content.touched && (
                      <ValidationError message={this.validateContent()} />
                    )}
                    <div className='field'>
                      <label htmlFor='groups'>Group</label>
                      <br />
                      <select
                        name='group'
                        id='group'
                        onChange={(e) => this.inputGroup(e.target.value)}
                      >
                        {this.renderOptions()}
                      </select>
                    </div>
                    <br />
                    <div className='field'>
                      <label htmlFor='names'>Author</label>
                      <br />
                      <input
                        id='name'
                        type='text'
                        name='name'
                        onChange={(e) => this.inputAuthor(e.target.value)}
                        required
                      />
                    </div>
                    {this.state.author.touched && (
                      <ValidationError message={this.validateAuthor()} />
                    )}
                    <br />
                    <button id='add-post-button' type='submit'>
                      Add Post
                    </button>
                  </form>
                </header>
              </div>
            </div>
            <Footer />
          </>
        )}
      </ApiContext.Consumer>
    );
  }
}

export default AddPost;
