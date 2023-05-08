const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: './assets/js/app.js',
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
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "assets/images", to: "images/[path][name][ext]" },
            ],
        }),
    ]
}
