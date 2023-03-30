import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="LoLGPT" key="title" />
        <meta
          property="og:description"
          content="League Of Legends AI powered by OpenAI"
          key="description"
        />
        <meta
          property="og:image"
          content="https://mcdn.wallpapersafari.com/medium/68/60/FPLiZR.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
