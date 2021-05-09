import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

class SideBar extends Component {
  // Returns the nav bar for the "/" and "/folder" routes
  displaySideBar = () => {
    const groups = [
      { id: 1, name: 'Algebra 1' },
      { id: 2, name: 'Geometry' },
      { id: 3, name: 'Algebra 2' },
      { id: 4, name: 'Intro to Data Science' }
    ];

    const sideBar = groups.map((group, i) => {
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
            {group.name}
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
