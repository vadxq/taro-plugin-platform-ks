# taro-plugin-platform-ks

tarojs 快手小程序平台插件

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

```javascript
const config = {
  plugins: [
    'taro-plugin-platform-ks'
  ]
}
```

记得在根目录添加`project.ks.json`配置
