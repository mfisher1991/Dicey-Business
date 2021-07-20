const path = require('path');
module.exports = {
    mode: 'development',

    entry: './app.ts',
    output: {
        path: path.resolve(_dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}