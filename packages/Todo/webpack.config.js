const webpack = require('webpack')
const path = require('path')
const glob = require('glob')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'TodoContainer.tsx'),

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
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