# taro-plugin-platform-ks

[![](https://img.shields.io/npm/v/taro-plugin-platform-ks.svg?style=flat-square)](https://www.npmjs.com/package/taro-plugin-platform-ks)
[![](https://img.shields.io/npm/l/taro-plugin-platform-ks.svg?style=flat-square)](https://www.npmjs.com/package/taro-plugin-platform-ks)
[![](https://img.shields.io/npm/dt/taro-plugin-platform-ks.svg?style=flat-square)](https://www.npmjs.com/package/taro-plugin-platform-ks)

> tarojs 快手小程序平台插件 1.3.x 适用tarojs v3.3.x版本
>
>2021-08-24 停止维护啦～
>
> 请前往tarojs官方插件哟~[plugin-platform-kwai](https://github.com/NervJS/taro-plugin-platform-kwai)

## 目录

```bash
├── src                      源码目录
|   ├── index.ts             插件入口
|   ├── program.ts           编译时入口
|   ├── template.ts          模板处理逻辑
|   ├── runtime.ts           运行时入口
|   ├── runtime-utils.ts     运行时依赖工具
|   ├── apis.ts              API 相关处理
|   ├── apis-list.ts         API 列表
|   ├── components.ts        组件列表
|   └── components-react.ts  给 React 使用的组件类型
├── types                    类型
├── index.js                 编译时入口
├── tsconfig.json
├── rollup.config.json
├── package.json
└── README.md
```

## 引入流程

```bash
npm i taro-plugin-platform-ks -D
# or
yarn add taro-plugin-platform-ks -D
```

or

```bash
# in package.json

{
  ...
  "taro-plugin-platform-ks": "~1.3.0"
  ...
}

# bash

yarn
#or
npm i
```

```javascript
const config = {
  plugins: [
    'taro-plugin-platform-ks'
  ]
}
```

```bash
# 编译
# 打包
taro build --type ks
# 开发环境
taro build --type ks --watch
```

记得在根目录添加`project.ks.json`配置

```javascript
// 平台判断
if (process.TARO_ENV === 'ks') {
  // ...
}
```

## 目前问题/解决进度

- 截止2021-04-21：官方会把template编译成span，所以会出现社区里有人出现swiper等失效的问题。这个问题已经反馈给了官方，等待处理。

- 截止2021-05-21:：template/import快手已经支持了。目前还会出现的问题是swiper失效问题。正在等待解决

- 截止2021-06-10: 官方已修复，目前插件可正常使用。需要taro v3.0+

- 2021-08-21: 分叉版本，适用不同版本tarojs
  - [1.0.x](https://github.com/vadxq/taro-plugin-platform-ks/tree/1.0.0) 适用老版本
  - [1.2.x](https://github.com/vadxq/taro-plugin-platform-ks/tree/1.2.0) 适用tarojs v3.2.x版本
  - [1.3.x](https://github.com/vadxq/taro-plugin-platform-ks) [当前版本]适用tarojs v3.3.x版本

- 2021-08-24: 项目停止维护，请移步tarojs官方插件哟～大佬们多多积极参与呀～
  - [plugin-platform-kwai](https://github.com/NervJS/taro-plugin-platform-kwai)
