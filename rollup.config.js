import fs from 'fs';
import path from 'path';
import alias from 'rollup-plugin-alias';
import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const commitHash = (function() {
  try {
    return fs.readFileSync('.commithash', 'utf-8');
  } catch (err) {
    return 'unknown';
  }
})();

const now = new Date().toUTCString();

const banner = `/*
  @license
        react-use-hardpass.js v${pkg.version}
        ${now} - commit ${commitHash}

        https://github.com/akrawchyk/react-use-hardpass

        Released under the MIT License.
*/`;

const moduleAliases = {
  resolve: ['.js', '.json'],
  'package.json': path.resolve('package.json')
};

export default  {
  input: './src/use-hardpass/index.ts',
  plugins: [
    resolve(),
    alias(moduleAliases),
    json(),
    typescript()
  ],
  external: [
    'react'
  ],
  output: [
    {
      file: 'dist/react-use-hardpass.umd.js',
      format: 'umd',
      name: 'use-hardpass',
      sourcemap: true,
      banner,
      globals: {
        react: 'React'
      }
    },
    {
      file: 'dist/react-use-hardpass.esm.js',
      format: 'esm',
      banner
    }
  ]
}
