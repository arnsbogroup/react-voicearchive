import Avatar from '../index';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Avatar />', () => {
  it('should render a img', () => {
    const component = renderer.create(<Avatar />);

    expect(component.toJSON().type).toBe('img');
  });

  it('should set the src', () => {
    const component = renderer.create(<Avatar src="url://to.the/file.png" />);

    expect(component.toJSON().props.src).toBe('url://to.the/file.png');
  });
});
