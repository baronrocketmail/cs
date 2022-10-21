import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="preload"
                    href="https://storage.googleapis.com/ponn/SF-Pro1.woff"
                    as="font"
                    type="font/woff"
                    crossOrigin
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}