
### 创建

项目使用`create-react-app`创建


### 配置webpack



### 在react项目中使用TypeScript

- `yarn add typescript @types/react @types/react-dom --save`

- [配置tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

- 
### 在react项目中使用redux

- `yarn add @types/redux @types/react-redux immer --save`

- 这里使用immer替代immutable,为的是之后使用redux的reducer的方便。immutable不太好用 - -。







### issue 

- *用create-react-app初始化项目的时候，npm start 启动项目的时候总是提示babel-eslint版本不一致的问题，根据命令行提示的四步走也不对，后来偶然发现是全局安装的node-modules影响了，把全局的node-modules删掉之后再次初始化项目启动就没有问题了。*

- *注意在这里安装typescript的时候，会报错`error execa@2.1.0: The engine "node" is incompatible with this module. Expected version "^8.12.0 || >=9.7.0". Got "8.11.2"` 这个时候使用nvm 切换下node版本即可 。我本地的node默认版本是8.12.0 使用`nvm list`查看已经有的版本，然后找到更高的版本。 `num use v12.16.1`*


### 加载使用webpack

**（使用一些插件来处理，这里暂未用到）**
```
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

```

#### 手动生成一个简易得webpack (以后搞)

##### 原理

**ES6转ES5**
- 通过babylon生成AST
- 通过babel-core将AST重新生成源码

**可以分析模块之间的依赖关系**

- 通过babel-traverse 的ImportDeclaration方法获取依赖属性

生成的JS文件可以再浏览器中运行



