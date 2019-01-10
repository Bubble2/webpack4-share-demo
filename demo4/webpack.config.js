const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.BannerPlugin('Hello World'),
        new HtmlWebpackPlugin({
            title: 'demo4',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
}