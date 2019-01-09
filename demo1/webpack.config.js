module.exports = {
    mode: 'none',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js'
    }
}

// module.exports = {
//     mode: 'none',
//     entry: {
//         index: ['./src/index.js', './src/add.js']
//     },
//     output: {
//         filename: '[name].bundle.js'
//     }
// }

// module.exports = {
//     mode: 'none',
//     entry: {
//         index: './src/index.js',
//         add: './src/add.js',
//         show: './src/show.js'
//     },
//     output: {
//         filename: '[name].bundle.js'
//     }
// }


// module.exports = {
//     mode: 'none',
//     entry: './src/index.js',
//     output: {
//         filename: '[name].bundle.js'
//     }
// }


// module.exports = {
//     mode: 'none',
//     entry: ['./src/index.js', './src/add.js'],
//     output: {
//         filename: '[name].bundle.js'
//     }
// }