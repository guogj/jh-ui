import path from 'path';
import { getPackagesSync  } from '@lerna/project' // 获取packsges内的文件package.json
import nodeResolve from '@rollup/plugin-node-resolve'; // 文件引入解析
import typescript from 'rollup-plugin-typescript2'; // typescript语法解析，编译
import vue from 'rollup-plugin-vue' // vue文件的编译解析

let inputs = getPackagesSync().map( pck => pck.name).filter(name => name.includes('@jh-ui'));
console.log(inputs);

export default inputs.map(name => {
    let pckname = name.split('@jh-ui')[1];
    return {
        input: path.resolve(__dirname,`../packages/${pckname}/index.ts`),
        output: {
            file: `lib/${pckname}/index.esm.js`,
            format: 'es'
        },
        plugins:[
            nodeResolve(),
            typescript({
                tsconfigOverride:{
                    compilerOptions:{
                        declaration: false,
                    },
                    exclude:['node_modules','website']
                }
            }),
            vue({
                target: 'browser'
            })
        ],
        external(id) { // 排除vue本身 和自己写的组件的打包
            return /^vue/.test(id) ||  /^@jh-ui/.test(id)
        },
    }
})