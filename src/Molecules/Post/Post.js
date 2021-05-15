import React, { Component } from 'react';
import FindGroupName from '../FindGroupName/FindGroupName';
import './Post.css';

class Post extends Component {
  render() {
    return (
      <>
        <section>
          <div className='post'>
            <h1>{this.props.post_name}</h1>
            <p>
              Team: <FindGroupName />
            </p>
            <p>{this.props.content}</p>
            <p>
              Posted by {this.props.author} on{' '}
              {this.props.modified.substring(0, 10)}
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default Post;
