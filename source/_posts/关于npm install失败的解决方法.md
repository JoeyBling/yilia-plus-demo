---
title: 关于npm install失败的解决方法
date: 2019.07.30 09:33:15
tags:
  - 日记本
description: 关于npm install失败的解决方法
---
> **可以尝试以下解决方案**

#### 1.授权执行
```bash
sudo npm install
```

#### 2.运行高权限用户
```bash
sudo npm install --unsafe-perm
```
<!--more-->

#### 3.安装某个模块
```bash
sudo npm i 模块名 --unsafe-perms
```

#### 4.清除代理
```bash
npm config set proxy false
```

#### 5.清除缓存
```bash
npm cache clean
```