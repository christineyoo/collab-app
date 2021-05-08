import React, { Component } from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Landing from './Pages/Landing/Landing';
import { Route } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <main className='App'>
        <header>
          <Route exact path='/' component={Landing} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/dashboard' component={Dashboard} />
        </header>
      </main>
    );
  }
}

export default App;
