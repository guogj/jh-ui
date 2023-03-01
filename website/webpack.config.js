const HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname,'main.ts'),
    output: {
        path: path.resolve(__dirname,'../website-dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.ts', '.tsx', '.js', '.vue', '.json']
    },
    module:{
        rules:[
            {
                test: /\.vue/,
                loader: 'vue-loader',
            },
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(svg|otf|ttf|woff|eot|gif|png)$/,
                loader: 'url-loader',
            },
            { // 识别样式
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }

        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'template.html')
        })
    ]

    





}