const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	mode: 'none',
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].[hash:8].js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader', //主要用于编译es6语法和react的jsx语法
					options: {
						cacheDirectory: true //开启缓存，提升速度
						// presets: ['@babel/preset-env', '@babel/preset-react']
					}
					//options请看.babelrc文件
				}
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../' //css中引入背景图片会在图片url前面加上该路径
						}
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1, //使用import之前还要经过几次loader(如果css中没用到@import，可以不加)
							modules: true, //启用css modules
							localIdentName: '[local]--[hash:base64:5]'
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: '百卓优采云进销存软件',
			filename: 'index.html',
			template: 'src/index.html',
			favicon: 'src/favicon.ico'
			// inject: false
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[hash:8].css'
			// chunkFilename: "[id].css"
		})
	]
};
