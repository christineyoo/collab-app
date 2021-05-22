import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import PostDetails from './PostDetails';

it('renders PostDetails UI as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <PostDetails />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
