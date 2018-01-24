import LogoIcon from '../index';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<LogoIcon />', () => {
  it('should render a img', () => {
    const component = renderer.create(<LogoIcon />);

    expect(component.toJSON().type).toBe('img');
  });

  it('use default url parameters', () => {
    const component = renderer.create(<LogoIcon />),
      expectedUrl = 'https://branding.arnsbomedia.com/voicearchive/icon/as.svg';

    expect(component.toJSON().props.src).toBe(expectedUrl);
  });

  it('can overwrite the default format', () => {
    const component = renderer.create(<LogoIcon format="png" />),
      expectedUrl = 'https://branding.arnsbomedia.com/voicearchive/icon/as.png';

    expect(component.toJSON().props.src).toBe(expectedUrl);
  });

  it('has a default alt text', () => {
    const component = renderer.create(<LogoIcon />);

    expect(component.toJSON().props.alt).toBe('VoiceArchive');
  });

  it('can overwrite the default alt text', () => {
    const component = renderer.create(<LogoIcon alt="Test" />);

    expect(component.toJSON().props.alt).toBe('Test');
  });
});
