import React, { Component } from 'react';
import './App.css';
import AllPosts from './Pages/AllPosts/AllPosts';
import AddPost from './Pages/AddPost/AddPost';
import Group from './Pages/Group/Group';
import Landing from './Pages/Landing/Landing';
import { Route, Switch } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import ScrollToTop from './ScrollToTop';

class App extends Component {
  state = {
    groups: [],
    posts: []
  };

  render() {
    return (
      <main className='App'>
        <header>
          <ScrollToTop />
          <Switch>
          <Route exact path='/all-posts' component={AllPosts} />
          <Route exact path='/add-post' component={AddPost} />
          <Route path='/group/:groupId' component={Group} />
          <Route exact path='/' component={Landing} />
          <Route component={NotFound} />
          </Switch>
          
        </header>
      </main>
    );
  }
}

export default App;
