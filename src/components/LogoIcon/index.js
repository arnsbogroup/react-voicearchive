import styled from 'styled-components';

const baseUrl = 'https://branding.arnsbomedia.com/voicearchive/icon/';

export default styled.img.attrs({
  alt: ({ alt }) => alt || "VoiceArchive",
  src: ({ format }) => `${baseUrl}as.${format || 'svg'}`
})`

`
