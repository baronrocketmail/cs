/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://stackoverflow.com/posts/66662033',
        permanent: false,
        basePath: false
      },
    ]
  },
};

