import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

class SideBar extends Component {
  static contextType = ApiContext;

  // Returns the nav bar for the "/" and "/folder" routes
  displaySideBar = () => {
    const copyGroups = this.context.groups || [];

    const sideBar = copyGroups.map((group, i) => {
      return (
        <NavLink
          to={`/group/${group.id}`}
          activeStyle={{
            fontStyle: 'bold',
            color: '#494158',
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
    return <>
    <NavLink to={'/all-posts'} activeStyle={{
            fontStyle: 'bold',
            color: '#494158',
            fontWeight: '900'
          }}>
            <div id='group-all-posts' className='group-card'>
            {'All Posts'}
            </div>
          </NavLink>
    {this.displaySideBar()}
      <NavLink to={'/add-post'} activeStyle={{
            fontStyle: 'bold',
            color: '#494158',
            fontWeight: '900'
          }}>
            <div id='group-add-post' className='group-card'>
            {' + Add a Post'}
            </div>
          </NavLink>
    </>;
  }
}

export default SideBar;
