const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.config.js');
const webpack = require('webpack');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-soure-map',
  output: {
    // 输出目录
    path: path.resolve(__dirname, '../dist'),
    // 文件名称
    filename: 'bundle.js',
    chunkFilename: '[name].js',
  },
  plugins: [
    //开启HMR(热替换功能,替换更新部分,不重载页面！) 相当于在命令行加 --hot
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, '../dist'),
    host: '192.168.0.103', // 可以使用手机访问
    port: 1024,
    historyApiFallback: true, //  该选项的作用所有的404都连接到index.html
  },
});
