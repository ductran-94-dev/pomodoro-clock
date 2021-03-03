/* eslint-disable indent */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --app-pallete-black: ${props => props.theme.pallete.common.black};
    --app-pallete-white: ${props => props.theme.pallete.common.white};

    --app-pallete-primary: ${props => props.theme.pallete.primary.main};
    --app-pallete-secondary: ${props => props.theme.pallete.secondary.main};
    
    --app-pallete-text-primary: ${props => props.theme.pallete.text.primary};
    --app-pallete-text-secondary: ${props =>
      props.theme.pallete.text.secondary};
    --app-pallete-text-disabled: ${props => props.theme.pallete.text.disabled};
    --app-pallete-text-hint: ${props => props.theme.pallete.text.hint};
  }

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: var(--app-pallete-primary);
    color: var(--app-pallete-text-primary);
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
