/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true, // Enables the faster SWC minifier
    images: {
      domains: ['http://localhost','http://52.23.225.133'], // Allow images from specific domains
    },
    i18n: {
      locales: ['en', 'es'], // Specify the supported locales
      defaultLocale: 'en', // Set the default locale
    },
    // Other configuration options here...
  };
  
  module.exports = nextConfig;