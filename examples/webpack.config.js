const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: {loader: 'babel-loader'}},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react')
        }
    }
}