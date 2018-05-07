# React Image

[Demo](https://skyvow.github.io/react-image)

## Example

```js

import React from 'react'
import ReactDOM from 'react-dom'
import ReactImage from 'react-image'

const App = () => <ReactImage src='https://unsplash.it/900/900/?random' />

ReactDOM.render(<App/>, document.getElementById('app'))

```

## 使用方法

```sh
$ git clone https://github.com/skyvow/skyvow.github.io.git
$ cd skyvow.github.io
$ npm install
$ npm start
```

|`npm run <script>`|描述|
|------------------|-----------|
|`dll`|动态链接库，预编译资源模块，必须在`start`之前执行一次。|
|`start`|服务启动在 3000 端口，代码热替换开启。|
|`build`|编译程序到 build 目录下（默认目录 ~/build）。|
|`lint`|检查所有 .js 文件是否规范。[更多](http://eslint.org/docs/user-guide/command-line-interface.html#fix)|

## 贡献

有任何意见或建议都欢迎提 issue

## License

MIT
