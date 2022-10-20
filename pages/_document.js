import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel = "preload"
                    href="../../18572live2/public/SF-Pro.woff"
                    as = "font"
                    type = "font/woff"
                    crossOrigin={"anonymous"}
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}