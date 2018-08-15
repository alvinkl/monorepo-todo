const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'imports.js'),

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: 'ts-loader'
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'main.build.js'
    }
}