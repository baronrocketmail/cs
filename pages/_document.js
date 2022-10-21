import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
            <link rel="preload" href="/public/SF-Pro.woff2.woff2" as="font" type="font/woff2" crossOrigin/>
            <link rel="preload" href="/public/SF-Pro.woff2.ttf" as="font" type="font/truetype" crossOrigin/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}