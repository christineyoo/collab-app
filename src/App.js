import './App.css';
import Landing from './pages/Landing/Landing';
import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <main className='App'>
        <header>
          <Landing />
        </header>
      </main>
    );
  }
}

export default App;
