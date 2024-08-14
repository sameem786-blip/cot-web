/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: [
      "localhost",
      "http://cot.com.pk.s3-website-us-east-1.amazonaws.com",
    ],
    loader: "custom",
    loaderFile: "./ImageLoader.js",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
