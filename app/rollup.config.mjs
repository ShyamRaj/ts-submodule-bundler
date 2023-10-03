import commonjs from '@rollup/plugin-commonjs';

import cleaner from "rollup-plugin-cleaner";

export default [
    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` and `format` for each target)
    {
        input: 'src/index.js',
        plugins: [
            cleaner({
                targets: ["./dist/"],
            }),
        ],
        external: [],
        output: [
            {dir: 'dist/cjs', format: 'cjs'},
            {dir: 'dist/esm', format: 'es'}
        ]
    }
];