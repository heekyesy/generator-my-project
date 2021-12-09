const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map', // 错误原展示
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  mode: "production" // 生产模式
});
