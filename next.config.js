/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/WebGL%20Builds.data.gz',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/data',
          },
          {
            key: 'Content-Encoding',
            value: 'gzip',
          },
        ],
      },
      {
        source: '/WebGL%20Builds.framework.js.gz',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/js',
          },
          {
            key: 'Content-Encoding',
            value: 'gzip',
          },
        ],
      },
      {
        source: '/WebGL%20Builds.wasm.gz',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/wasm',
          },
          {
            key: 'Content-Encoding',
            value: 'gzip',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
