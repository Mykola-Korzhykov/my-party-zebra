import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript
            dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K8RW5WL" height="0" width="0" style="display:none;visibility:hidden" />`,
            }}
        />
      </body>
    </Html>
  )
}