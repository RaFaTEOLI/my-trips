import type { Metadata } from 'next';

import { ThemeProvider, type DefaultTheme } from 'styled-components';
import { AppProps } from 'next/app';
import GlobalStyles from './styles/global';
import Head from 'next/head';

import NextNprogress from 'nextjs-progressbar';
import { DefaultSeo } from 'next-seo';
import seoConfig from 'next-seo.config';

export const metadata: Metadata = {
  title: 'My Trips',
  description:
    'A simple project to show the places I have visited in the world.'
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
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092b" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
        <NextNprogress
          color="#f231a5"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
        <DefaultSeo {...seoConfig} />
      </ThemeProvider>
    </>
  );
}
