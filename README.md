### 介绍

一个基于vue2.6+webpack5的简易版配置脚手架，可以生成基于vue组件或插件开发的模板。

### 使用
``` bash
$ yarn add -g vue-cli
$ vue init chuckchen88/webpack-vue2-template my-project
$ cd my-project
$ yarn
$ yarn dev
```

### vue组件或插件开发


### npm发布
``` bash

# 登录npm
$ npm login

# 调试 -- 可跳过
$ npm link # 创建包缓存
$ npm link packageName  # 其他项目用引用这个包
$ npm unlink packageName # 其他项目中解除引用这个包（必须）

# 发布
$ npm publish
```

