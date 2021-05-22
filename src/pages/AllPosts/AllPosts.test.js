import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import AllPosts from './AllPosts';

it('renders AllPosts UI as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <AllPosts />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
