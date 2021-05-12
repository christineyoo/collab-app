import React, { Component } from 'react';
import './App.css';
import AllPosts from './Pages/AllPosts/AllPosts';
import AddPost from './Pages/AddPost/AddPost';
import Dashboard from './Pages/Dashboard/Dashboard';
import Group from './Pages/Group/Group';
import Landing from './Pages/Landing/Landing';
import NotFound from './Pages/NotFound/NotFound';
import { Route } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';

class App extends Component {
  state = {
    groups: [],
    posts: []
  };

  render() {
    return (
      <main className='App'>
        <header>
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/all-posts' component={AllPosts} />
          <Route exact path='/add-post' component={AddPost} />
          <Route path='/group/:groupId' component={Group} />
          <Route exact path='/' component={Landing} />
          <Route component={NotFound} />
        </header>
      </main>
    );
  }
}

export default App;
