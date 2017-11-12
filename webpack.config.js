const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/main.ts',
    output: {
        path: __dirname + "/dist",
        filename: "main.js"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'vue-template-loader',
                exclude: __dirname + "/src/index.html"
            }
        ]
    },
    resolve: {
        extensions: ['.ts', ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"
        })
    ]
};