/* eslint-disable */
const { ProvidePlugin } = require('webpack');

function webpackPlugin(context, options) {
  return {
    name: 'webpack-plugin',
    configureWebpack(config, isServer) {
      // Server builds: only provide React globally to fix SSR JSX compilation
      if (isServer) {
        return {
          plugins: [
            new ProvidePlugin({
              React: require.resolve('react'),
            }),
          ],
        };
      }
      // Client builds: provide Node.js polyfills
      return {
        module: {
          rules: [
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false,
              },
            },
          ],
        },
        plugins: [
          new ProvidePlugin({
            process: require.resolve('process/browser'),
            React: require.resolve('react'),
          }),
        ],
        resolve: {
          fallback: {
            stream: require.resolve('stream-browserify'),
            path: require.resolve('path-browserify'),
            buffer: require.resolve('buffer/'),
            url: require.resolve('url'),
            crypto: false,
          },
          alias: {
            process: 'process/browser.js',
          },
        },
      };
    },
  };
}

module.exports = {
  webpackPlugin,
};
