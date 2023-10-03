// import typescript from '@rollup/plugin-typescript';
import cleaner from "rollup-plugin-cleaner";
import typescript from 'rollup-plugin-typescript2';
// import ttypescript from 'ttypescript';
// import tsPlugin from 'rollup-plugin-typescript2';

let override = { compilerOptions: { declaration: false } };
export default [
    {
        input: {
            cars: 'src/cars/cars.ts',
            fruits: 'src/fruits/fruits.ts',
            index: 'src/index.ts'
        },
        plugins: [
            cleaner({
                targets: ["./dist/"],
            }),
            typescript()
            // tsPlugin({
            //     typescript: ttypescript
            // })
        ],
        external: [],
        output: [
            {dir: 'dist/cjs', format: 'cjs'},
            {dir: 'dist/esm', format: 'es'}
        ]
    },
    {
        input: 'src/index.ts',
        external: [],
        output: [{ file : 'dist/index.js', name : 'mylib', format : 'iife', sourcemap : true }],
        plugins: [
            typescript()
            // tsPlugin({
            //     typescript: ttypescript
            // })
        ]
    }
];