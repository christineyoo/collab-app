import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Group from './Group';
import FindGroupName from '../../Molecules/FindGroupName/FindGroupName';

it('renders Group UI as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <Group />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
