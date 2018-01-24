import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: path.resolve('src/index.js'),
  output: [
    { file: 'lib/index.js', format: 'cjs' }
  ],
  external: [
    'styled-components'
  ],
  plugins: [
    resolve(),
    babel()
  ]
};
