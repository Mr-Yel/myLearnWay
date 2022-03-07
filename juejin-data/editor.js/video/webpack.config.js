const path = require('path');

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: {
        index: './src/page/home/index.js',
        note: './src/page/my-note/note.js'
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }, ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
        },
        allowedHosts: 'all',
        compress: true,
        port: 9001,
    },
};