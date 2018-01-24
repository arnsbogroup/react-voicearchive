/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import styled from 'styled-components';

const baseUrl = 'https://branding.arnsbomedia.com/voicearchive/icon/';

export default styled.img.attrs({
  alt: ({ alt }) => alt || "VoiceArchive",
  src: ({ format }) => `${baseUrl}as.${format || 'svg'}`
})`

`
