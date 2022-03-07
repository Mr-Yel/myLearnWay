import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";

module.exports = [{
    input: "./src/index.js",
    output: {
        file: "./dist/index.js",
        format: "umd",
    },
    plugins: [
        postcss({
            extract: true,
            minimize: false
        }),
        commonjs(),
        nodeResolve(),
    ],
}, ];