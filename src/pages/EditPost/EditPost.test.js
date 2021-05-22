import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import EditPost from './EditPost';

it('renders EditPost UI as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <EditPost />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
