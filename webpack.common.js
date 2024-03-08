const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: './assets/app.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                include: path.join(__dirname, 'assets'),
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'assets'),
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'assets'),
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: "assets/images", to: "images/[path][name][ext]"},
            ],
        }),
        new HtmlWebpackPlugin({template: './public/index.html'})
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
}
