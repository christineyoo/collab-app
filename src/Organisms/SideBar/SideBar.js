import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import { NavLink, Link } from 'react-router-dom';
import './SideBar.css';

class SideBar extends Component {
  static contextType = ApiContext;

  displaySideBar = () => {
    const copyGroups = this.context.groups || [];

    const sideBar = copyGroups.map((group, i) => {
      return (
        <NavLink
          key={i}
          to={`/group/${group.id}`}
          activeStyle={{
            fontStyle: 'bold',
            color: '#245149',
            fontWeight: '900'
          }}
        >
          <div className='group-card' key={i}>
            {group.group_name}
          </div>
        </NavLink>
      );
    });
    return sideBar;
  };

  render() {
    return (
      <>
        <NavLink
          to={'/all-posts'}
          activeStyle={{
            fontStyle: 'bold',
            color: '#245149',
            fontWeight: '900'
          }}
        >
          <div id='group-all-posts' className='group-card'>
            {'All Posts'}
          </div>
        </NavLink>
        {this.displaySideBar()}
        <Link to={'/add-post'}>
          <div id='group-add-post' className='group-card'>
            {' + Add a Post'}
          </div>
        </Link>
      </>
    );
  }
}

export default SideBar;
