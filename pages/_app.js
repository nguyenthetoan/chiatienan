import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { NextSeo } from 'next-seo';
import theme from '../src/theme';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <NextSeo
          title="Chia tiền ăn có mã khuyến mãi, giảm giá | Chia tiền ăn cơm"
          description="Chia tiền theo hoá đơn, bill, có áp dụng mã khuyến mãi, mã giảm giá, tính tiền theo hoá đơn khuyến mãi, gỉam gía"
        />
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
