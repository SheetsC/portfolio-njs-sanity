/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    domains: ['poolofficemanager.com','www.google.com','cdn.sanity.io' /* ...other allowed domains */],
  }, 
    remotePatterns: [{
      protocal:"https",
      hostname: "cdn.sanity.io",
      port:""
  }]
}

module.exports = nextConfig

