import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './EditPost.css';
import ApiContext from '../../ApiContext.js';
import Footer from '../../Organisms/Footer/Footer.js';
import HomeButton from '../../Organisms/HomeButton/HomeButton';
import PropTypes from 'prop-types';
import ValidationError from '../../ValidationError/ValidationError';

class EditPost extends Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object
  };

  static contextType = ApiContext;
  state = {
    title: {
      value: this.props.location.post_name,
      touched: false
    },
    content: {
      value: this.props.location.content,
      touched: false
    },
    group: {
      value: this.props.location.group_id,
      touched: false
    },
    author: {
      value: this.props.location.author,
      touched: false
    }
  };

  // Functions to change the state
  editPostName = (title) => {
    this.setState({
      title: {
        value: title,
        touched: true
      }
    });
  };

  editContent = (content) => {
    this.setState({
      content: {
        value: content,
        touched: true
      }
    });
  };

  editGroup = (group) => {
    this.setState({
      group: {
        value: group,
        touched: true
      }
    });
  };

  editAuthor = (author) => {
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

  handleEdit = (event, postId, editPostCb) => {
    event.preventDefault();
    const { title, content, group, author } = this.state;
    const postTitle = title.value;
    const postContent = content.value;
    const postGroup = group.value;
    const postAuthor = author.value;
    const postModified = '2021-05-20 23:21:26.392487+00';
    fetch(`http://localhost:8000/api/posts/${postId}`, {
      method: 'PATCH',
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
        this.props.history.push(`/post/${postId}`);
        editPostCb(
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
            <HomeButton />
            <div id='edit-post-bg'>
              <Link to={`/post/${this.props.location.post_id}`}>
                <span id='add-post-button'>{'Cancel'}</span>
              </Link>
              <div className='edit-post'>
                <header className='header'>
                  <h1 id='edit-post-h1'>Edit post</h1>
                  <br />
                  <form
                    onSubmit={(e) =>
                      this.handleEdit(
                        e,
                        this.props.location.post_id,
                        context.addPost
                      )
                    }
                  >
                    <div className='field'>
                      <label htmlFor='title'>Title</label>
                      <br />
                      <input
                        id='title'
                        type='text'
                        name='title'
                        value={this.state.title.value}
                        onChange={(e) => this.editPostName(e.target.value)}
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
                        value={this.state.content.value}
                        onChange={(e) => this.editContent(e.target.value)}
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
                        value={this.state.group.value}
                        onChange={(e) => this.editGroup(e.target.value)}
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
                        value={this.state.author.value}
                        onChange={(e) => this.editAuthor(e.target.value)}
                        required
                      />
                    </div>
                    {this.state.author.touched && (
                      <ValidationError message={this.validateAuthor()} />
                    )}
                    <br />
                    <button id='edit-post-button' type='submit'>
                      Save
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

export default withRouter(EditPost);
