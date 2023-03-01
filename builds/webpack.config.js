let path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
    mode: "production",
    entry: path.resolve(__dirname,'./../packages/jh-ui/index.ts'),
    output: {
        path: path.resolve(__dirname,'../lib'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'jh-ui',
    },
    externals: { // 排除vue打包
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
        },
    },
    module: {
        rules:[
            {
                test: /\.vue/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    resolve:{
        extensions:['.ts','.tsx','.js','.json']
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}