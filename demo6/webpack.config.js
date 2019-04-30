const webpack = require('webpack');

module.exports = {
	mode: 'none',
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js'
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
						loader: 'style-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1, //使用import之前还要经过几次loader(如果css中没用到@import，可以不加)
							sourceMap: true,
							modules: true, //启用css modules
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
			}
		]
	}
};
