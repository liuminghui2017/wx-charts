import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';


export default {
  input: 'src/app.js',
  output: {
    file: './dist/wxcharts-min.js',
    format: 'cjs'
  },
  plugins: [
      babel({
          exclude: 'node_modules/**',
      }),
      uglify()
  ]
};
