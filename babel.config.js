module.exports = {
    presets:[
        '@babel/preset-env',
        '@babel/preset-typescript'
    ],
    overrides: [{ // 对vue文件内的typescript语法解析编译支撑 和config文件内的vueloader不冲突
        test: /\.vue$/,
        plugins: [ // ?
            '@babel/transform-typescript', // @babel/plugin-transform-typescript 处理vue内的ts
        ],
    }],
    env: {
        utils: {
            plugins: [ // ?
                [
                    'babel-plugin-module-resolver', // 为了能正确找到z-ui模块
                    { root: 'z-ui' }
                ]
            ]
        }
    }
}