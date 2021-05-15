import React, { Component } from 'react';
import './App.css';
import AddPost from './Pages/AddPost/AddPost';
import AllPosts from './Pages/AllPosts/AllPosts';
import ApiContext from './ApiContext';
import Group from './Pages/Group/Group';
import Landing from './Pages/Landing/Landing';
import { Route, Switch } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import PostDetails from './Pages/PostDetails/PostDetails';
import ScrollToTop from './ScrollToTop';

class App extends Component {
  state = {
    groups: [],
    posts: [],
    error: null
  };

  componentDidMount() {
    // Fetches group data
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

    // Fetches post data
    this.fetchPosts();
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

  // Adds a post to the state
  addPost = (data, postName, postContent, postGroup, postAuthor) => {
    const newPostObject = {
      id: data.id,
      name: postName,
      content: postContent,
      group: postGroup,
      author: postAuthor
    };
    this.setState({ posts: [...this.state.posts, newPostObject] });
  };

  // Deletes a post from the state
  deletePost = (postId) => {
    const newPosts = this.state.posts.filter((post) => post.id !== postId);
    this.setState({ posts: newPosts });
    this.fetchPosts();
  };

  render() {
    const contextValue = {
      groups: this.state.groups,
      posts: this.state.posts,
      addPost: this.addPost,
      deletePost: this.deletePost,
      fetchPosts: this.fetchPosts
    };

    return (
      <main className='App'>
        <header>
          <ApiContext.Provider value={contextValue}>
            <ScrollToTop />
            <Switch>
              <Route exact path='/all-posts' component={AllPosts} />
              <Route exact path='/add-post' component={AddPost} />
              <Route path='/group/:groupId' component={Group} />
              <Route path='/post/:postId' component={PostDetails} />
              <Route exact path='/' component={Landing} />
              <Route component={NotFound} />
            </Switch>
          </ApiContext.Provider>
        </header>
      </main>
    );
  }
}

export default App;
