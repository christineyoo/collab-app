import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <>
        <footer className='footer-style'>
          <div className='container'>
            <h4>Copyright &copy; 2021 Christine Yoo</h4>
            <ul id='footer-menu'>
              <li>
                <i className='fab fa-linkedin-in'></i>
                <a
                  href='https://www.linkedin.com/in/christine-yoo-cy/'
                  target='_blank'
                  rel='noreferrer'
                >
                  &nbsp;<strong> LinkedIn</strong>
                </a>
              </li>
              <li>
                <i className='fab fa-github'></i>
                <a
                  href='https://github.com/christineyoo'
                  target='_blank'
                  rel='noreferrer'
                >
                  &nbsp;<strong> GitHub</strong>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
