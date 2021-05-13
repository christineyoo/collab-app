import React, { Component } from 'react';
import UserNav from '../../Organisms/Nav/UserNav.js';
import Footer from '../../Organisms/Footer/Footer.js';
import './AddPost.css';

class AddPost extends Component {
  renderNames = () => {
    const names = [
      'Alfred Cardenas',
      'Nick Dequina',
      'Teresa Dyson',
      'David Gavrilovic',
      'Esther Ishii',
      'James Le',
      'Jake Nguyen',
      'Chuck Rah',
      'Anna Saad',
      'Destiny Tadena',
      'Megan Tran',
      'Chris Yoo'
    ];

    return names.map((name) => {
      return <option value={name.substring(0, 4)}>{name}</option>;
    });
  };
  render() {
    return (
      <>
        <UserNav />
        <main className='add-post'>
          <header className='header'>
            <h1>Add a new post</h1>
            <form>
              <div className='field'>
                <label for='title'>Title</label>
                <br />
                <input id='title' type='text' name='title' required />
              </div>

              <br />
              <div className='field'>
                <label for='content'>Content</label>
                <br />
                <textarea
                  id='content'
                  name='content'
                  rows='15'
                  cols='100'
                ></textarea>
              </div>

              <br />
              <div className='field'>
                <label for='groups'>Group</label>
                <br />
                <select name='group' id='group'>
                  <option value='algebra-1'>Algebra 1</option>
                  <option value='geometry'>Geometry</option>
                  <option value='algebra-2'>Algebra 2</option>
                  <option value='ids'>Intro to Data Science</option>
                  <option value='math'>Math department</option>
                </select>
              </div>
              <br />
              <div className='field'>
                <label for='names'>Author</label>
                <br />
                <input id='name' type='text' name='name' required />
              </div>
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
