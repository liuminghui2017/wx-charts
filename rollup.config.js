import babel from 'rollup-plugin-babel';

export default {
  input: 'src/app.js',
  output: {
    file: './dist/wxcharts.js',
    format: 'cjs'
  },
  plugins: [
      babel({
          exclude: 'node_modules/**',
      })
  ],
};
