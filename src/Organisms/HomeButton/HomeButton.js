import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeButton.css';

class HomeButton extends Component {
  render() {
    return (
      <nav id='nav' className='nav'>
        <Link exact to='/'>
          Collab
        </Link>
      </nav>
    );
  }
}

export default HomeButton;
