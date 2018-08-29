import Tag from '../index';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Tag />', () => {
  it('should render a div', () => {
    const component = renderer.create(<Tag />);

    expect(component.toJSON().type).toBe('div');
  });
});
