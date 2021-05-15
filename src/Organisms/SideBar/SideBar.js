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
        <div className='group-card' key={i}>
          <NavLink
            to={`/group/${group.id}`}
            activeStyle={{
              fontStyle: 'bold',
              color: '#33333',
              fontWeight: '900'
            }}
          >
            {group.group_name}
          </NavLink>
        </div>
      );
    });
    return sideBar;
  };

  render() {
    return (
      <>
        {this.displaySideBar()}
      </>
    );
  }
}

export default SideBar;
