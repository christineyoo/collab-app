import React, { Component } from 'react';
import ApiContext from '../../ApiContext';

class AddComment extends Component {
  static contextType = ApiContext;

  render() {
    return (
      <ApiContext.Consumer>
        {(context) =>
         (
          <form onSubmit={(e) => this.handleSubmit(e, context.addComment)}>
            <label htmlFor='comment'>
              <i class='far fa-comment fa-3x'></i>
            </label>
            <textarea
              id='comment'
              name='comment'
              rows='5'
              cols='50'
              placeholder='Leave a comment...'
            ></textarea>
            <button type='submit'>Submit</button>
          </form>
        )}
      </ApiContext.Consumer>
    );
  }
}

export default AddComment;
