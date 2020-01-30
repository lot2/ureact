import babel from 'rollup-plugin-babel'

export default {
  input: './src/ureact.js',
  output: {
    file: './dist/ureact.js',
    format: 'es'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ]
}
