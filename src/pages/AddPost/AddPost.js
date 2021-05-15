import React, { Component } from 'react';
import './AddPost.css';
import ApiContext from '../../ApiContext.js';
import Footer from '../../Organisms/Footer/Footer.js';
import UserNav from '../../Organisms/Nav/UserNav.js';

class AddPost extends Component {
  static contextType = ApiContext;

  renderOptions = () => {
    const copyGroups = this.context.groups || [];
    const groupOptions = copyGroups.map((group) => {
      return <option value={group.group_name}>{group.group_name}</option>;
    });
    const allGroupOptions = [
      ...groupOptions,
      <option value='Math department'>Math department</option>
    ];
    return allGroupOptions;
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
                  {this.renderOptions()}
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
