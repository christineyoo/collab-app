import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FindGroupName from '../FindGroupName/FindGroupName';
import PropTypes from 'prop-types';
import './Post.css';
import ApiContext from '../../ApiContext';

class MiniPost extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  static contextType = ApiContext;

  render() {
    return (
      <ApiContext.Consumer>
        {(context) => (
          <section>
            <div className='post'>
              <NavLink to={`/post/${this.props.id}`}>
                <h1>{this.props.post_name}</h1>
              </NavLink>
              <p>
                Team: <FindGroupName />
              </p>
              <p>
                {this.props.content.substring(0, 100)}
                {'...'}
              </p>
              <p>
                Posted by {this.props.author} on {this.props.modified}
              </p>
            </div>
          </section>
        )}
      </ApiContext.Consumer>
    );
  }
}

export default MiniPost;
