/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const isProd = process.env.NODE_ENV === 'production';

const pwaConfig = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
});

const nextConfig = {
  ...pwaConfig,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['us-west-2.graphassets.com']
  }
};

export default nextConfig;
