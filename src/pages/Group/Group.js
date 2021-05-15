import React, { Component } from 'react';
import FindGroupName from '../../Molecules/FindGroupName/FindGroupName';
import Footer from '../../Organisms/Footer/Footer.js';
import './Group.css';
import Posts from '../../Organisms/Posts/Posts.js';
import SideBar from '../../Organisms/SideBar/SideBar.js';
import UserNav from '../../Organisms/Nav/UserNav.js';

class Group extends Component {
  findGroupName = () => {
    if (+this.props.match.params.groupId === 1) {
      return 'Integrated Math 1';
    } else if (+this.props.match.params.groupId === 2) {
      return 'Integrated Math 2';
    } else if (+this.props.match.params.groupId === 3) {
      return 'Integrated Math 3';
    } else {
      return 'Intro to Data Science';
    }
  };
  render() {
    return (
      <>
        <UserNav />
        <main>
          <header className='header'>
            <h1><FindGroupName group_id={this.props.match.params.groupId} /></h1>
            <h2>Viewing recent posts from {this.findGroupName()}</h2>
          </header>
          <div className='flex-container'>
            <div className='flex-1'>
              <SideBar />
            </div>
            <div className='flex-3'>
              <Posts isOnGroup group_id={this.props.match.params.groupId} />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Group;
