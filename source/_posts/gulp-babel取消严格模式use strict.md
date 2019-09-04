---
title: gulp-babel 取消严格模式("use strict")
date: 2019.07.23 09:38
tags: 日记本
description: gulp-babel 取消严格模式("use strict")
---
> 插件地址 ➡️ [https://github.com/genify/babel-plugin-transform-remove-strict-mode](https://github.com/genify/babel-plugin-transform-remove-strict-mode)

### 1、安装
```bash
npm install babel-plugin-transform-remove-strict-mode
```

<!--more-->
### 2、使用
> **添加内容到`.babelrc`文件**

```javascript
{
  "plugins": ["transform-remove-strict-mode"]
}
```

> 重新执行打包命令即可