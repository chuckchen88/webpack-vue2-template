// node 内置模块
const path = require('path')
var webpack = require('webpack')
// 用于打包html
//const HtmlWebpackPlugin = require('html-webpack-plugin')  
// 最新的 vue-loader 中，VueLoaderPlugin 插件的位置有所改变
const { VueLoaderPlugin } = require('vue-loader')

var entry = "./src/main.js";
var filename = "build.js";

if (process.env.NODE_ENV !== "development") {
  entry = "./src/plugins/index.js";
  filename = "Menus.min.js";
}
// 导出webpack配置信息
module.exports = {
  mode: process.env.NODE_ENV, // 环境模式
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'), // 打包出口
    publicPath: '/dist/',
    filename,
    libraryTarget: "umd",
    umdNamedDefine: true, // 给 AMD 模块命名，否则匿名
    clean: true, //在每次构建前清理 /dist 文件夹
  },
  devServer: {
    static: path.resolve(__dirname, './'),
    port: 8080,
    open:true
  },
  module: {
    rules: [
        //vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          esModule: false
        }
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, './index.html'), // 我们要使用的 html 模板地址
    //   filename: 'index.html', // 打包后输出的文件名
    //   title: '手搭 Vue 开发环境' // index.html 模板内，通过 <%= htmlWebpackPlugin.options.title %> 拿到的变量
    // }),
    /**
     * VueLoaderPlugin 的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
     */
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  performance: {
    hints: false
  },
  devtool: 'inline-source-map'
}