const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports={
    mode:'development',
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
    },
         {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
        }
    ]},
        plugins: [
            new HtmlWebPackPlugin ({
                template:"./src/client/views/index.html",
                filename: "./index.html"
            }),
            new CleanWebpackPlugin({
                dry: true,
                verbose: true,
                cleanStaleWebpackAssets: true,
                protectWebpackAssets: false
        })
        ],
    
     
}