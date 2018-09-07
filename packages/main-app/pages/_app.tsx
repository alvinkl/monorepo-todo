import { Container, default as App } from 'next/app';
import * as React from 'react';
import { Provider } from 'react-redux';

import withReduxHelper from '../src/redux/withReduxHelper';

class MyApp extends App<{ reduxStore: {} }, {}> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxHelper(MyApp);
