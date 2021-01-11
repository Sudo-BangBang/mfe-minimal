const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
      filename: '[name].[contenthash].js',
      publicPath: '/container/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        service_a: `service_a@${domain}/service-a/latest/remoteEntry.js`,
        service_b: `service_b@${domain}/service-b/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    })
  ],
};

module.exports = merge(commonConfig, prodConfig);