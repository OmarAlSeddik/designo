import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon-32x32.png" />
      <body className="font-jost">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
