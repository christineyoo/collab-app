import React, { Component } from 'react';
import './App.css';
import AddPost from './Pages/AddPost/AddPost';
import AllPosts from './Pages/AllPosts/AllPosts';
import ApiContext from './ApiContext';
import CollabError from './CollabError';
import Group from './Pages/Group/Group';
import Landing from './Pages/Landing/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import PostDetails from './Pages/PostDetails/PostDetails';
import ScrollToTop from './ScrollToTop';
import EditPost from './Pages/EditPost/EditPost';

class App extends Component {
  state = {
    groups: [],
    posts: [],
    comments: [],
    error: null
  };

  componentDidMount() {
    fetch('http://localhost:8000/api/groups', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((groupData) => this.setState({ groups: groupData }))
      .catch((error) => this.setState({ error }));
    this.fetchPosts();
    this.fetchComments();
  }

  fetchPosts = () => {
    fetch('http://localhost:8000/api/posts', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((postData) => {
        return this.setState({ posts: postData });
      })
      .catch((error) => this.setState({ error }));
  };

  fetchComments = () => {
    fetch('http://localhost:8000/api/comments', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((commentData) => this.setState({ comments: commentData }))
      .catch((error) => this.setState({ error }));
  };

  addPost = (
    data,
    postName,
    postContent,
    postGroup,
    postAuthor,
    postModified
  ) => {
    const newPostObject = {
      id: data.id,
      name: postName,
      content: postContent,
      group: postGroup,
      author: postAuthor,
      modified: postModified
    };
    this.setState({ posts: [newPostObject, ...this.state.posts] });
    this.fetchPosts();
  };

  deletePost = (postId) => {
    const newPosts = this.state.posts.filter((post) => post.id !== postId);
    this.setState({ posts: newPosts });
    this.fetchPosts();
  };

  updatePost = (
    data,
    postName,
    postContent,
    postGroup,
    postAuthor,
    postModified
  ) => {
    const updatedPostObject = {
      id: data.id,
      name: postName,
      content: postContent,
      group: postGroup,
      author: postAuthor,
      modified: postModified
    };
    const filteredPosts = this.state.posts.filter(
      (post) => post.id !== data.id
    );
    this.setState({ posts: filteredPosts });
    this.setState({ posts: [updatedPostObject, ...this.state.posts] });
    this.fetchPosts();
  };

  addComment = (data, commentContent, commentAuthor, commentPostId) => {
    const newCommentObject = {
      id: data.id,
      content: commentContent,
      author: commentAuthor,
      post_id: commentPostId
    };
    this.setState({ comments: [...this.state.comments, newCommentObject] });
    this.fetchComments();
  };

  deleteComment = (commentId) => {
    const newComments = this.state.comments.filter(
      (comment) => comment.id !== commentId
    );
    this.setState({ comments: newComments });
    this.fetchComments();
  };

  render() {
    const contextValue = {
      groups: this.state.groups,
      posts: this.state.posts,
      comments: this.state.comments,
      addPost: this.addPost,
      deletePost: this.deletePost,
      updatePost: this.updatePost,
      addComment: this.addComment,
      deleteComment: this.deleteComment,
      fetchPosts: this.fetchPosts,
      fetchComments: this.fetchComments
    };

    return (
      <Router>
        <main className='App'>
          <header>
            <ApiContext.Provider value={contextValue}>
              <ScrollToTop />
              <CollabError>
                <Switch>
                  <Route exact path='/all-posts' component={AllPosts} />
                  <Route exact path='/add-post' component={AddPost} />
                  <Route path='/group/:groupId' component={Group} />
                  <Route path='/post/:postId/edit' component={EditPost} />
                  <Route path='/post/:postId' component={PostDetails} />
                  <Route exact path='/' component={Landing} />
                  <Route component={NotFound} />
                </Switch>
              </CollabError>
            </ApiContext.Provider>
          </header>
        </main>
      </Router>
    );
  }
}

export default App;
