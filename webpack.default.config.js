const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    hot: "only",
    static : {
      directory : path.join(__dirname, "/")
    },
    client: {
      overlay: true,
      progress: true
    }
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}