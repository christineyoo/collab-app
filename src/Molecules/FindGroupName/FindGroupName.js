import React, { Component } from 'react';

class findGroupName extends Component {
  findGroupName = () => {
    if (+this.props.group_id === 1) {
      return 'Integrated Math 1';
    } else if (+this.props.group_id === 2) {
      return 'Integrated Math 2';
    } else if (+this.props.group_id === 3) {
      return 'Integrated Math 3';
    } else {
      return 'Intro to Data Science';
    }
  };
  render() {
    return <>{this.findGroupName()}</>;
  }
}

export default findGroupName;
