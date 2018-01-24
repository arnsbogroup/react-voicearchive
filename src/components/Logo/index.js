import styled from 'styled-components';

const baseUrl = 'https://branding.arnsbomedia.com/voicearchive/logo/';

export default styled.img.attrs({
  alt: ({ alt }) => alt || "VoiceArchive",
  src: ({ size, withTagline, negative, format }) => `${baseUrl}${
    withTagline === true
      ? 'with'
      : 'without'
  }-tagline/as_${size || 'medium'}${
    negative === true
      ? '_negative'
      : ''
  }.${format || 'png'}`
})`

`
