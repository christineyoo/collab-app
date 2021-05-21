import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FindGroupName from '../FindGroupName/FindGroupName';
import './Post.css';

class MiniPost extends Component {
  render() {
    return (
      <section>
        <Link to={`/post/${this.props.id}`}>
          <div className='post'>
            <h1 className='post-title'>{this.props.post_name}</h1>
            <p>
              Team:{' '}
              <strong>
                <FindGroupName group_id={this.props.group_id} />
              </strong>
            </p>
            <p>
              {this.props.content.substring(0, 100)}
              {'...'}
            </p>
            <p>
              Posted by {this.props.author} on{' '}
              {this.props.modified.substring(0, 10)}
            </p>
          </div>
        </Link>
      </section>
    );
  }
}

export default MiniPost;
