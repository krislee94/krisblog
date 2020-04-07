const path = require("path");
const webpack = require('webpack');
// const styleComponentPlugins = require('babel-plugin-styled-components');
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    modules: [path.resolve(__dirname, 'src/web_modules'), 'node_modules'],
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
  mode: "production",
  module:{
      rules:[
          {
              test:/.tsx?$/,
              use:'awesome-typescript-loader',
          },
          {
            test:/.js$/,
            use:'babel-loader'
          },
          {
              test: /.css$/,
              use:[
                  'style-loader',
                  'css-loader',
              ]
          },
          {
              test:/.less$/,
              use:[
                'style-loader',
                'css-loader',
                'less-loader',
              ]
          },
          {
              test:/.(png|jpg|gif|jpeg)$/,
              use:[
                  {
                      loader:'url-loader',
                      options:{
                          limit:10240
                      }
                  }
              ]
          },
          {
            test:/.(woff|woff2|eot|ttf|otf)$/,
            use:'file-loader'
          }
      ],
  },
  plugins:[
      new webpack.HotModuleReplacementPlugin(),
  ],
  devServer:{
      contentBase:'./dist',
      hot:true,
  }
};
