const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path')

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: [
            {
                directory: path.join(__dirname, 'public'),
                serveIndex: true,
            },
            {
                directory: path.join(__dirname, 'assets'),
                publicPath: '/assets',
            },
            {
                directory: path.join(__dirname, 'dist'),
                publicPath: '/dist',
            },
        ],
    }
})
