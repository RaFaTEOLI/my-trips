import type { Metadata } from 'next';

import { ThemeProvider, type DefaultTheme } from 'styled-components';
import { AppProps } from 'next/app';
import GlobalStyles from './styles/global';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description:
    'Next.js boilerplate with TypeScript, ESLint, Prettier, Vitest, and styled-components'
};

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3'
  }
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>{metadata.title as string}</title>
          <meta name="description" content={metadata.description as string} />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092b" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
