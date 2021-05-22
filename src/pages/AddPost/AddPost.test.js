import React from 'react';
import renderer from 'react-test-renderer';
import AddPost from './AddPost';

it('renders AddPost UI as expected', () => {
    const tree = renderer.create(<AddPost />).toJSON();
    expect(tree).toMatchSnapshot();
})