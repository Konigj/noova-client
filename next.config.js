/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['noova-server.herokuapp.com', 'res.cloudinary.com']
  },
  webpack(config){
    config.module.rules.push({
      test:/\.svg$/,
      use:[{ loader: '@svgr/webpack', options:{ icon: true }}],

    })
    return config
  },
  async redirects() {
    return [
      {
        source: '/mahicenter',
        destination: '/mahi',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
