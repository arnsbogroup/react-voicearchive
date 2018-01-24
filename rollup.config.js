import babel from 'rollup-plugin-babel';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';

export default {
  external: ['styled-components'],
  input: path.resolve('src/index.js'),
  output: [
    {
      'file': 'lib/index.js',
      'format': 'cjs'
    }
  ],
  plugins: [
    resolve(),
    babel()
  ]
};
