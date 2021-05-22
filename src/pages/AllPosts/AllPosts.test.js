import React from 'react';
import renderer from 'react-test-renderer';
import AllPosts from './AllPosts';

it('renders AllPosts UI as expected', () => {
    const tree = renderer.create(<AllPosts />).toJSON();
    expect(tree).toMatchSnapshot();
})