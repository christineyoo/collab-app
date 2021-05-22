import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HomeButton from '../../Organisms/HomeButton/HomeButton';
import FindGroupName from '../../Molecules/FindGroupName/FindGroupName';
import Footer from '../../Organisms/Footer/Footer.js';
import './Group.css';
import Posts from '../../Organisms/Posts/Posts.js';
import SideBar from '../../Organisms/SideBar/SideBar.js';

class Group extends Component {
  render() {
    return (
      <>
        <HomeButton />
        <div id='group-bg'>
          <header className='group'>
            <h1>
              <FindGroupName group_id={this.props.match.params.groupId} />
            </h1>
            <h2>
              Viewing posts from{' '}
              <FindGroupName group_id={this.props.match.params.groupId} />{' '}
              teachers
            </h2>
          </header>
          <div className='flex-container'>
            <div className='flex-1'>
              <SideBar />
            </div>
            <div className='flex-3'>
              <Posts isOnGroup group_id={this.props.match.params.groupId} />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(Group);
