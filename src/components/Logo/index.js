/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import styled from 'styled-components';

const baseUrl = 'https://branding.arnsbomedia.com/voicearchive/logo/';

export default styled.img.attrs({
  alt: ({ alt }) => alt || "VoiceArchive",
  src: ({ size, withTagline, format }) => `${baseUrl}${
    withTagline === true
      ? 'with'
      : 'without'
  }-tagline/as_${size || 'medium'}.${format || 'png'}`
})`

`
