import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import Wrapper from 'components/simple/Wrapper';
import { ResultProvider } from 'providers/ResultContext';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="cache-control" content="public" />
        <meta httpEquiv="Cache-Control" content="max-age=31536000" />
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex" />
      </Head>
      <GlobalStyles />
      <Wrapper>
        <ResultProvider>
          <Component {...pageProps} />
        </ResultProvider>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
