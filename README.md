# React Image [![Build Status](https://travis-ci.org/skyvow/react-image.svg?branch=master)](https://travis-ci.org/skyvow/react-image) [![npm version](https://img.shields.io/npm/v/react-image-preload.svg)](https://www.npmjs.org/package/react-image-preload) [![Coverage Status](https://coveralls.io/repos/github/skyvow/react-image/badge.svg?branch=master)](https://coveralls.io/github/skyvow/react-image?branch=master)

Preload images.

[Demo](https://skyvow.github.io/react-image)

## 安装

```
$ npm install --save react-image-preload
```

## 示例

```js

import React from 'react'
import ReactDOM from 'react-dom'
import ReactImage from 'react-image-preload'

const App = () => <ReactImage src='https://unsplash.it/900/900/?random' />

ReactDOM.render(<App/>, document.getElementById('app'))

```

## 使用方法

```sh
$ git clone https://github.com/skyvow/react-image.git
$ cd react-image
$ npm install
$ npm start
```

|`npm run <script>`|描述|
|------------------|-----------|
|`dll`|动态链接库，预编译资源模块，必须在`start`之前执行一次。|
|`start`|服务启动在 3000 端口，代码热替换开启。|
|`build`|编译程序到 build 目录下（默认目录 ~/build）。|
|`lint`|检查所有 .js 文件是否规范。[更多](http://eslint.org/docs/user-guide/command-line-interface.html#fix)|
|`dist`|输出编译后的 dist 文件。|
|`test`|运行测试用例。|
|`test:watch`|监听文件变化，自动运行测试用例。|
|`test:reporter`|输出测试结果报告。|
|`test:coverage`|输出测试覆盖率报告。|
|`ghpages`|部署 GitHub Pages 站点。|

## 贡献

有任何意见或建议都欢迎提 issue

## License

MIT
