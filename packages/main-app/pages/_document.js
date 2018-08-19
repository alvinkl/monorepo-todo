import Document, { Head, Main, NextScript } from "next/document";

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
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <nav className="navbar navbar-dark bg-dark">
            <a href="#" className="navbar-brand">
              Todo
            </a>
          </nav>

          <Main />
          <NextScript />

          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          />
        </body>
      </html>
    );
  }
}
