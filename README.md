# webpack-base-template

一个用 webpack 构建 工具或功能库 的起始模板，节省初始配置构建环境的时间。

### 使用

在 `src/index.js` 入口处进行管理。

```bash

    # 常规构建， css 会被内联
    yarn build

    # 抽取构建， css 将单独被抽取为文件
    yarn extract

```

最终会构建到 `./dist` 下。

### 说明

#### 基础依赖

依赖|构成|说明
:-:|:-|:-
`babel7`|`@babel/polyfill`<br>`core-js`<br>`@babel/core`| 使用最新版本的 babel + core-js3 处理 js 兼容性
`postcss`|`postcss`<br>`autoprefixer`| 使用 postcss + autoprefixer 处理 css 前缀兼容
`sass`|`node-sass`|使用 sass/scss 预处理器，高效编写样式
`webpack`|`webpack`<br>`webpack-cli`<br>`webpack-merge`| 使用 webpack + webpack-merge 构建项目并实现配置分类

#### 配置

文件|构成|说明
:-:|:-|:-
`babel.config.json`|`@babel/preset-env`|使用 babel 推荐预设配置按需引入填充
`postcss.config.js`|`postcss-preset-env`|使用 postcss 推荐预设，其会自动使用 autoprefixer
`webpack.base.js`|`webpack`|基础 webpack 配置，作为 merge 基础
`webpack.config.js`|`webpack`|标准 webpack 配置，适合小型库，对 css 内联减少引入开支
`webpack.prod.js`|`webpack`|大型库 webpack 配置，会抽取 css 为单独的文件

#### loader

类型|构成|说明
:-:|:-|:-
js|`babel-loader`|处理 javascript 的 loader
sass|`sass-loader`|支持 sass/scss 文件导入的 loader
css|`css-loader`|处理 css 的loader
css-inline|`style-loader`|支持 css 内联的 loader


#### 插件

依赖|说明
:-:|:-
`clean-webpack-plugin`|每次打包前清理打包文件夹内上次残留文件
`mini-css-extract-plugin`|支持抽取 css 为单独的文件

#### 工具库支持

当你需要构建对外暴露对象或方法的工具库时，需要配置 `output.library` 

`library` ：对外暴露的对象或方法的名称，未来将使用此名称调用入口的导出

`libraryExport` ：从 webpack 默认转换为 cmd 规范的 Module 中取值，以实现导入即用的魔术方法

`libraryTarget` ：提供 amd 、cmj、global 多种导入支持


当你不需要对外暴露时（自运行库），可删去此部分配置。


#### 其他

依赖|说明
:-:|:-
`cross-env`|对存在于构建过程的全局变量提供跨系统兼容


### Vue sfc Support

若要使用 Vue2.0 作为运行支持同时编写 `.vue` 组件，请移步 [vue2](https://github.com/fz6m/webpack-base-template/tree/vue2) 分支。

使用 Vue3.0 请移步 [vue3](https://github.com/fz6m/webpack-base-template/tree/vue3) 分支。