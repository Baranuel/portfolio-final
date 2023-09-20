/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'https://picsum.photos/200/300',
            port: '',
            pathname: '/*/*',
          },
        ],
      },
}

module.exports = nextConfig
