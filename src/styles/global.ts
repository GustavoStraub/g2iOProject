import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';
import { theme } from 'styled-tools';

type GlobalStylesProps = {
  //
};

const GlobalStyles: GlobalStyleComponent<GlobalStylesProps, DefaultTheme> = createGlobalStyle`
  * {
    font-family: 'Signika', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #c8c3c2;
  }
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 65px;
  }
`;

export default GlobalStyles;
