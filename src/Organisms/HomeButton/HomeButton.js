import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeButton.css';

class HomeButton extends Component {
  render() {
    return (
      <nav>
        <Link id='nav' exact to='/'>
          Collab
        </Link>
      </nav>
    );
  }
}

export default HomeButton;
