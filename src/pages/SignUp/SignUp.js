import React, { Component } from 'react';
import HomeNav from '../../Organisms/Nav/HomeNav.js';
import Footer from '../../Organisms/Footer/Footer.js';
import './SignUp.css';

class SignUp extends Component {
  render() {
    return (
      <>
        <HomeNav />
        <main>
          <header>
            <h1>Let's Collab.</h1>
            <form>
              <label htmlFor='first-name'>First Name</label>&nbsp;
              <input id='first-name' type='text' name='first-name' required />
              <br />
              <label htmlFor='last-name'>Last Name</label>&nbsp;
              <input id='last-name' type='text' name='last-name' required />
              <br />
              <label htmlFor='username'>Username</label>&nbsp;
              <input id='username' type='text' name='username' required />
              <br />
              <label htmlFor='password'>Password</label>&nbsp;
              <input id='password' type='password' name='password' required />
              <br />
              <button type='submit'>Submit</button>
            </form>
          </header>
        </main>
        <Footer />
      </>
    );
  }
}

export default SignUp;
