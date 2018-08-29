import Card from '../index';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Card />', () => {
  it('should render a div', () => {
    const component = renderer.create(<Card />);

    expect(component.toJSON().type).toBe('div');
  });
});
