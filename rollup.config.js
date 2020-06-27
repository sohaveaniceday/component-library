import typescript from 'rollup-plugin-typescript2'
import svg from 'rollup-plugin-svg-import'
import postcss from 'rollup-plugin-postcss'
import del from 'rollup-plugin-delete'
import pkg from './package.json'
import svgr from '@svgr/rollup'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'playground/src/component-lib/index.js',
        format: 'esm',
        banner: '/* eslint-disable */',
      },
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      del({ targets: ['dist/*', 'playground/src/component-lib'] }),
      typescript(),
      svg(),
      svgr(),
      postcss({
        plugins: [],
      }),
    ],
    external: [...Object.keys(pkg.peerDependencies || {}), 'src/index.css'],
  },
]
