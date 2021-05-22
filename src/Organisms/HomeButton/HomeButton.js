import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './HomeButton.css';

class HomeButton extends Component {
  render() {
    return (
      <Router><nav>
        <Link id='nav' exact to='/'>
          Collab
        </Link>
      </nav></Router>
      
    );
  }
}

export default HomeButton;
