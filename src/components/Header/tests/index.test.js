import Header from '../index';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Header />', () => {
  it('should render a div', () => {
    const component = renderer.create(<Header />);

    expect(component.toJSON().type).toBe('div');
  });
});
