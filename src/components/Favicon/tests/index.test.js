import Favicon from '../index';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Favicon />', () => {
  it('should render a link tag', () => {
    const component = renderer.create(<Favicon />);

    expect(component.toJSON().type).toBe('link');
  });

  it('set rel to be icon', () => {
    const component = renderer.create(<Favicon />);

    expect(component.toJSON().props.rel).toBe('icon');
  });

  it('set type to image/x-icon', () => {
    const component = renderer.create(<Favicon />);

    expect(component.toJSON().props.type).toBe('image/x-icon');
  });

  it('set href to be the URL to icon', () => {
    const component = renderer.create(<Favicon />),
      expectedUrl = 'https://branding.arnsbomedia.com/voicearchive/icon/as.png';

    expect(component.toJSON().props.href).toBe(expectedUrl);
  });
});
