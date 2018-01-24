import Favicon from '../index';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Favicon />', () => {
  it('should render a link tag', () => {
    const component = renderer.create(<Favicon />);

    expect(component.toJSON().type).toBe('link');
  })
});
