const path = require('path')
const env = process.env.APP_ENV ?? 'development'
const dev = env === 'development'
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
    mode: env,
    entry: './assets/js/app.js',
    watch: dev,
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}
