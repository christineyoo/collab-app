import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <Router>
        <footer className='footer-style'>
          <div className='container'>
            <h4 id='footer-h4-hh'>Copyright &copy; 2021 Christine Yoo</h4>
            <ul id='footer-menu'>
              <li>
                <i className='fab fa-linkedin-in'></i>
                <a
                  href='https://www.linkedin.com/in/christine-yoo-cy/'
                  target='_blank'
                  rel='noreferrer'
                >
                  &nbsp;LinkedIn
                </a>
              </li>
              <li>
                <i className='fab fa-github'></i>
                <a
                  href='https://github.com/christineyoo'
                  target='_blank'
                  rel='noreferrer'
                >
                  &nbsp;GitHub
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </Router>
    );
  }
}

export default Footer;
