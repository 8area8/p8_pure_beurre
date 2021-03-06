/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')


// the path(s) that should be cleaned
const pathsToClean = ["./assets/bundles"]
// the clean options to use
const cleanOptions = {}


module.exports = {
    context: __dirname,
    entry: {
        'index': './assets/dev/index.js'
    },
    output: {
        path: path.resolve("./assets/bundles"),
        filename: "[name].js",
        publicPath: '/static/bundles/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]',
                            limit: 5000
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new BundleTracker(
            { filename: './webpack-stats.json' }
        ),
        new MiniCssExtractPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CleanWebpackPlugin(pathsToClean, cleanOptions)
    ]
}
/* eslint-enable */