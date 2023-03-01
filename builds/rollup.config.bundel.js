let path = require('path');
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue'
const pd = path.resolve(__dirname,'../packages/jh-ui/index.ts')
console.log('pd', pd)
module.exports = {
    input: path.resolve(__dirname,'../packages/jh-ui/index.ts'),
    output: {
        format: 'es',
        file:'lib/index.esm.js'
    },
    plugins:[
        nodeResolve(),
        typescript({
            tsconfigOverride:{
                exclude: [
                    'node_modules',
                    'website'
                ]
            }
        }),
        vue({
            target: 'browser'
        })
    ],
    external(id) { // 排除vue本身
        return /^vue/.test(id)
    },
}