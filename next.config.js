/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    domains: ['poolofficemanager.com','www.google.com','cdn.sanity.io','encrypted-tbn0.gstatic.com' /* ...other allowed domains */],
  }, 
    remotePatterns: [{
      protocal:"https",
      hostname: "cdn.sanity.io",
      port:""
  }]
}

module.exports = nextConfig

