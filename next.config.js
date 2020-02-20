/* eslint-disable */
const path = require('path');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['lodash-es']);

module.exports = withPlugins([withTM], {
  webpack(config, options) {
    config.resolve.alias.components = path.join(__dirname, 'components')
    return config
  }
})
