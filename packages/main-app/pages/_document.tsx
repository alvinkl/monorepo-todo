import { default as Document, Head, Main, NextScript } from 'next/document';
import { default as Link } from 'next/link';
import * as React from 'react';

// import "../static/css/style.css";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          />
        </Head>
        <body>
          <nav className="navbar navbar-dark bg-dark">
            <Link href="/mobx">
              <a className="navbar-brand">Mobx</a>
            </Link>

            <Link href="/redux">
              <a className="navbar-brand">Redux</a>
            </Link>
          </nav>

          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
