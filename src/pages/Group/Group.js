import React, { Component } from 'react';
import Footer from '../../Organisms/Footer/Footer.js';
import './Group.css';
import Posts from '../../Organisms/Posts/Posts.js';
import SideBar from '../../Organisms/SideBar/SideBar.js';
import UserNav from '../../Organisms/Nav/UserNav.js';

class Group extends Component {
  findGroupName = () => {
    if (+this.props.match.params.groupId === 1) {
      return 'Algebra 1';
    } else if (+this.props.match.params.groupId === 2) {
      return 'Geometry';
    } else if (+this.props.match.params.groupId === 3) {
      return 'Algebra 2';
    } else if (+this.props.match.params.groupId === 4) {
      return 'Intro to Data Science';
    } else {
      return null;
    }
  };
  render() {
    return (
      <>
        <UserNav />
        <main>
          <header className='header'>
            <h1>{this.findGroupName()}</h1>
            <h2>Viewing recent posts from {this.findGroupName()}</h2>
          </header>
          <div className='flex-container'>
            <div className='flex-1'>
              <SideBar />
            </div>
            <div className='flex-3'>
              <Posts isOnGroup groupId={this.props.match.params.groupId} />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Group;
