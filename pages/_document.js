import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
            {/*<link rel="preload" href="/public/SF-Pro.woff2.woff2" as="font" type="font/woff2" crossOrigin/>*/}
            {/*<link rel="preload" href="/public/SF-Pro.woff2.ttf" as="font" type="font/truetype" crossOrigin/>*/}
            {/*<link rel="preload" href="/public/SF-Pro.woff2.woff2" as="font" crossOrigin="anonymous"/>*/}
            {/*<link rel="preload" href="https://storage.googleapis.com/ponn/SF-Pro.woff" as="font" crossOrigin="anonymous"/>*/}
                        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
                              rel="stylesheet"/>


            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}