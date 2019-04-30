const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.config');

module.exports = webpackMerge(webpackBaseConfig, {
	mode: 'development',
	output: {
		filename: '[name].js'
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		port: 9000,
		compress: true,
		disableHostCheck: true,
		host: '0.0.0.0',
		hot: true,
		historyApiFallback: true,
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1, //使用import之前还要经过几次loader
							sourceMap: true,
							modules: true,
							localIdentName: '[local]--[hash:base64:5]'
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]'
					}
				}
			}
		]
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
});
