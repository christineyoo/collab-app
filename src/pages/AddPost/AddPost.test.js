import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import AddPost from './AddPost';

it('renders AddPost UI as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <AddPost />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
