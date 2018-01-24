import Logo from '../index';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Logo />', () => {
  it('should render a img', () => {
    const component = renderer.create(<Logo />);

    expect(component.toJSON().type).toBe('img');
  });

  it('set all defaults parameters to the URL', () => {
    const component = renderer.create(<Logo />),
      expectedUrl = 'https://branding.arnsbomedia.com/voicearchive/logo/' +
        'without-tagline/as_medium.png';

    expect(component.toJSON().props.src).toBe(expectedUrl);
  });

  it('can overwrite the size default value', () => {
    const component = renderer.create(<Logo size="large" />),
      expectedUrl = 'https://branding.arnsbomedia.com/voicearchive/logo/' +
        'without-tagline/as_large.png';

    expect(component.toJSON().props.src).toBe(expectedUrl);
  });

  it('can overwrite the withTagline default value', () => {
    const component = renderer.create(<Logo withTagline={true} />),
      expectedUrl = 'https://branding.arnsbomedia.com/voicearchive/logo/' +
        'with-tagline/as_medium.png';

    expect(component.toJSON().props.src).toBe(expectedUrl);
  });

  it('can overwrite the format default value', () => {
    const component = renderer.create(<Logo format={"jpg"} />),
      expectedUrl = 'https://branding.arnsbomedia.com/voicearchive/logo/' +
        'without-tagline/as_medium.jpg';

    expect(component.toJSON().props.src).toBe(expectedUrl);
  });

  it('has a default alt text', () => {
    const component = renderer.create(<Logo />);

    expect(component.toJSON().props.alt).toBe('VoiceArchive');
  });

  it('can overwrite the default alt text', () => {
    const component = renderer.create(<Logo alt="Test" />);

    expect(component.toJSON().props.alt).toBe('Test');
  });
});
