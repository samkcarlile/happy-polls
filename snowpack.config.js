/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    'src/client': '/_dist_',
  },
  exclude: [
    '**/node_modules/**/*',
    '**/__tests__/*',
    '**/*.@(spec|test).@(js|mjs)',
    'src/server/**/*',
  ],
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  installOptions: {},
  install: ['@chakra-ui/react', 'framer-motion'],
  proxy: {
    '/api': 'http://localhost:3000/api',
  },
};
