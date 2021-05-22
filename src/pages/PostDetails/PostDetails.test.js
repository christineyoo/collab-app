import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
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
