// module.exports = {
//     mode: 'none',
//     entry: './src/index.js',
//     output: {
//         filename: 'bundle.js'
//     }
// }


// module.exports = {
//     mode: 'none',
//     entry: {
//         index : './src/index.js'
//     },
//     output: {
//         filename: '[name].bundle.js'
//     }
// }

// module.exports = {
//     mode: 'none',
//     entry: {
//         index: './src/index.js'
//     },
//     output: {
//         filename: '[name].[hash].bundle.js'
//     }
// }

module.exports = {
    mode: 'none',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist/assets'
    }
}