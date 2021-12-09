const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: false, // 错误原展示
  mode: "development",
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});