/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        hostname: "proyectobohemia.com",
        protocol: "https",
        port: ""
      },
      {
        hostname: "www.visitparaguay.net",
        protocol: "https",
        port: ""
      },
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
        port: ""
      }
    ],
  },
};

module.exports = nextConfig;
