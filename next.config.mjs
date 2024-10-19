/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
      return [
        {
          source: '/', 
          destination: '/v1/page.html'
        },
      ];
    },
};

export default nextConfig;
