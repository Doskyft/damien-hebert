const {merge} = require("webpack-merge");
const common = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: "public/.htaccess", to: "./"},
            ],
        })
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
})
