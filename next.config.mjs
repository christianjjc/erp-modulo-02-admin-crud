/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailus.io',
        //pathname: "/sources/blocks/stats-cards/preview/images/**",
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        //pathname: "/sources/blocks/stats-cards/preview/images/**",
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        //pathname: "/sources/blocks/stats-cards/preview/images/**",
      },
    ],
  },
};

export default nextConfig;
