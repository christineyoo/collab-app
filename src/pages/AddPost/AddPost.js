import React, { Component } from 'react';
import UserNav from '../../Organisms/Nav/UserNav.js';
import Footer from '../../Organisms/Footer/Footer.js';
import './AddPost.css';

class AddPost extends Component {
  render() {
    return (
      <>
        <UserNav />
        <main className='add-post'>
          <header className='header'>
            <h1>Add a new post.</h1>
            <form>
              <label for='title'>Title</label>&nbsp;
              <input id='title' type='text' name='title' required />
              <br />
              <label for='content'>Content</label>
              <br />
              <textarea
                id='content'
                name='content'
                rows='4'
                cols='50'
              ></textarea>
              <br />
              <label for='groups'>Group</label>&nbsp;
              <select name='group' id='group'>
                <option value='algebra-1'>Algebra 1</option>
                <option value='geometry'>Geometry</option>
                <option value='algebra-2'>Algebra 2</option>
                <option value='ids'>Intro to Data Science</option>
                <option value='math'>Math department</option>
              </select>
              <br />
              <button type='submit'>Add Post</button>
            </form>
          </header>
        </main>
        <Footer />
      </>
    );
  }
}

export default AddPost;
