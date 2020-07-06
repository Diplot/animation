const path = require ('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    mode: "development",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: 'index.html'
        })
    ]
};