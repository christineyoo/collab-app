import React, { Component } from 'react';
import './EditPost.css';
import ApiContext from '../../ApiContext.js';
import Footer from '../../Organisms/Footer/Footer.js';
import PropTypes from 'prop-types';
import UserNav from '../../Organisms/Nav/UserNav.js';
import ValidationError from '../../ValidationError/ValidationError';

class AddPost extends Component {
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
    const groupOptions = copyGroups.map((group) => {
      return <option value={group.group_name}>{group.group_name}</option>;
    });
    const allGroupOptions = [
      ...groupOptions,
      <option value='Math department'>Math department</option>
    ];
    return allGroupOptions;
  };

  handleEdit = (event, addPostCb) => {
    event.preventDefault();
    const { title, content, group, author } = this.state;
    const postTitle = title.value;
    const postContent = content.value;
    const postGroup = group.value;
    const postAuthor = author.value;
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
        modified: '2021-05-20 23:21:26.392487+00'
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
        addPostCb(data, postTitle, postContent, postGroup, postAuthor);
        this.context.fetchPosts();
      });
  };

  consolelog = () => {
    console.log(
      'prop',
      typeof this.props.location.post_name,
      this.props.location.post_name
    );
    console.log(
      'prop',
      typeof this.props.location.content,
      this.props.location.content
    );
    console.log(
      'prop',
      typeof this.props.location.author,
      this.props.location.author
    );
    console.log(
      'prop',
      typeof this.props.location.group_id,
      this.props.location.group_id
    );
  };

  render() {
    return (
      <ApiContext.Consumer>
        {(context) => (
          <div>
            {this.consolelog()}
            <UserNav />
            <main className='add-post'>
              <header className='header'>
                <h1>Edit post</h1>
                <form onSubmit={(e) => this.handleEdit(e, context.addPost)}>
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
                  <button type='submit'>Save</button>
                </form>
              </header>
            </main>
            <Footer />
          </div>
        )}
      </ApiContext.Consumer>
    );
  }
}

export default AddPost;
