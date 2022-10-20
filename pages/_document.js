import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel = "preload"
                    href="../../18572live2/public/SF-Pro.woff2"
                    as = "font"
                    type = "font/woff2"
                    crossOrigin={"anonymous"}
                />
                <link
                    rel = "preload"
                    href="../../18572live2/public/SF-Pro.woff"
                    as = "font"
                    type = "font/woff"
                    crossOrigin={"anonymous"}
                />
                <link
                    rel = "preload"
                    href="../../18572live2/public/SF-Pro.ttf"
                    as = "font"
                    type = "font/truetype"
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