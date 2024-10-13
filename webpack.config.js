const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        src: './index.js',  // Corrected path to main.js
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,  // Corrected regex for JSX files
                exclude: /node_modules/,
                loader: 'babel-loader',  // Corrected spelling of 'babel-loader'
                options: {
                    presets: ['@babel/env', '@babel/react'],  // Corrected spelling of 'babel'
                },
            },
            {
                test: /\.s?css$/,  // Corrected regex for CSS and SCSS files
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'index.html',
        })
    ],
    devServer: {
        static: {
            publicPath: '/build/',
            directory: path.resolve(__dirname, 'build'),
        },
        port: 3000,
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:3000',
            },
        ],
    },
};
