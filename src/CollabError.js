import React, { Component } from "react";
import PropTypes from "prop-types";

class CollabError extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Could not display this section</h2>;
    }
    return this.props.children;
  }
}

export default CollabError;