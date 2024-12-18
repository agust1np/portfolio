import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import original from "react95/dist/themes/original";
import Desktop from './components/Desktop';
import Assistant from './components/Assistant';
import { ClippyProvider, AGENTS } from '@react95/clippy';
import { GlobalStyle } from './styles/global';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('https://cdn.jsdelivr.net/npm/react95@4.0.0/dist/fonts/ms_sans_serif.woff2') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('https://cdn.jsdelivr.net/npm/react95@4.0.0/dist/fonts/ms_sans_serif_bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background: #008080;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

function App() {
  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <GlobalStyle />
      <ClippyProvider agentName={AGENTS.GENIUS}>
        <Desktop />
        <Assistant />
      </ClippyProvider>
    </ThemeProvider>
  );
}

export default App;