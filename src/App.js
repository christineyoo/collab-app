import React, { Component } from 'react';
import './App.css';
import Landing from './Pages/Landing/Landing';
import { Route, Link } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <main className='App'>
        <header>
          <Route exact path='/' component ={Landing} />
          <Route exact path='/signup' component = {SignUp} />
        </header>
      </main>
    );
  }
}

export default App;
