const transpileModules = require('next-transpile-modules');
const withTM = transpileModules(['react-konva', 'konva']);

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['']
  }
};

module.exports = withTM(nextConfig);
