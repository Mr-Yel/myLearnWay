// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel'; 
import styles from "rollup-plugin-styles"; // https://github.com/Anidetrix/rollup-plugin-styles
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

import rollupTypescript from 'rollup-plugin-typescript2';

import { DEFAULT_EXTENSIONS } from '@babel/core' 

import pkg from './package.json';

const config = {
    input: 'src/main.js',
    output: [{
        file: pkg.main,
        format: 'umd',
        name: 'exeToolBox',
        sourcemap: false,
    }, {
        file: pkg.module,
        format: 'es',
        sourcemap: false
    }],
    plugins: [
        styles(),
        resolve(),  // 解析第三方依赖 
        commonjs(), // 识别 commonjs 模式第三方依赖 
        rollupTypescript(),  // 会自动读取 文件tsconfig.json配置
        babel({ // babel 配置 
            babelHelpers: 'runtime', // 编译库使用 
            exclude: 'node_modules/**', // 只转换源代码，不转换外部依赖 
            plugins: ["@babel/plugin-transform-runtime"], 
            extensions: [ // babel 默认不支持 ts 需要手动添加 
                ...DEFAULT_EXTENSIONS, 
                '.ts', 
            ], 
        }),
        // terser()
    ]
};


// 若打包正式环境，压缩代码 
if (env === 'production') { 
    config.plugins.push(terser({ 
        compress: { 
            pure_getters: true, 
            unsafe: true, 
            unsafe_comps: true, 
            warnings: false 
        } 
    })) 
} 

export default config