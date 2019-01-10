module.exports = {
    mode: 'none',
    entry: {
        index: './src/index.js',
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
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test:/\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
                // use: [
                //     {
                //         loader: 'style-loader',
                //         options: {
                //             sourceMap: true
                //         }
                //     },
                //     {
                //         loader: 'css-loader',
                //         options: {
                //             sourceMap: true
                //         }
                //     },
                //     {
                //         loader: 'sass-loader',
                //         options: {
                //             sourceMap: true
                //         }
                //     }
                // ]
            }
        ]
    }
}