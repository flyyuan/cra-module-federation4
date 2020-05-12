const { override,addWebpackPlugin, } = require('customize-cra');
const ModuleFederationPlugin = require('webpack-plugin-module-federation')
module.exports = {
  webpack: override(
  addWebpackPlugin(
    new ModuleFederationPlugin({
      remotes: {
        website2: '_federation_website2',
      },
    }),
  ),
  )
};