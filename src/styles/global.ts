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

::-webkit-scrollbar {
  width: 10px;
}


::-webkit-scrollbar-track {
  background: ${theme('colors.grayscale.lightGray')};
  border-radius: 1rem;
}


::-webkit-scrollbar-thumb {
  background: ${theme('colors.purple')};
  border-radius: 1rem;
}


::-webkit-scrollbar-thumb:hover {
  background: ${theme('colors.lightPurple')};
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
  h1, h2, h3, h4, h5, p{
    word-break: break-word;
  }
`;

export default GlobalStyles;
