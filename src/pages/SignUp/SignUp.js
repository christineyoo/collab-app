import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import Footer from '../../Organisms/Footer/Footer.js';
import './SignUp.css';

class SignUp extends Component {
  render() {
    return (
      <>
        <nav>Collab | Sign Up | Demo </nav>
        <main>
          <header>
            <h1>Let's Collab.</h1>
            <form>
              <label for='first-name'>First Name</label>
              <input id='first-name' type='text' name='first-name' required />
              <br />
              <label for='last-name'>Last Name</label>
              <input id='last-name' type='text' name='last-name' required />
              <br />
              <label for='username'>Username</label>
              <input id='username' type='text' name='username' required />
              <br />
              <label for='password'>Password</label>
              <input id='password' type='text' name='password' required />
              <br />
              <button type='submit'>
                <strong>Submit</strong>
              </button>
            </form>
          </header>
        </main>
        <Footer />
      </>
    );
  }
}

export default SignUp;
