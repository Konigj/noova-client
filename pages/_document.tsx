import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>
            <link rel="icon" href="favicon.svg" type="image/x-icon"/>
            <link rel="apple-touch-icon" href="favicon.svg"/>
      </Head>
      <body>
            
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}