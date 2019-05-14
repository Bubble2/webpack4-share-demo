const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'none',
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].[hash:8].js'
		// publicPath: '/dist/'
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		port: '9000',
		compress: true, //是否启用gzip压缩
		disableHostCheck: true, //绕过主机检查
		host: '0.0.0.0', //如果你希望服务器外部可访问
		// hot: true, // 模块热替换,必须要配合webpack.HotModuleReplacementPlugin插件使用
		historyApiFallback: true //当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
		// publicPath: '/dist/', //用来本地服务拦截带publicPath开头的请求的
		// contentBase: '/dist/abc/' //用来指定被访问html页面所在目录的
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
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: '百卓优采云进销存软件',
			filename: 'index.html',
			// filename: 'abc/index.html', //注意此处生成的html路径为//dist/abc/index.html
			template: 'src/index.html',
			favicon: 'src/favicon.ico'
			// inject: false
		})
	]
};
