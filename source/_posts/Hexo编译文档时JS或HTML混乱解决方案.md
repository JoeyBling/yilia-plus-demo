---
title: Hexo编译文档时JS或HTML混乱解决方案
date: 2019.07.26 11:26:51
tags: Hexo
description: Hexo编译文档时JS或HTML混乱解决方案
---
##### Tips:前导必备
- [博主博客地址](https://zhousiwei.gitee.io/)
- 博主使用的是**[hexo-theme-yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus)**主题

> 之前为在 GitHub 博客上写自己的 html 网页，在 hexo 根目录下的 source 文件夹中放了自己的 js 文件，每次 `hexo g` 后，pubic 文件夹中的 js 文件就混乱了，与自己实际 js 不一致。

### 解决方案(跳过 hexo 渲染)

> **Hexo 3.0 以上支持**
> 修改 Hexo 主目录下的 _config.yml 配置文件中的 `skip_render` 参数。
<!--more-->

```yaml
skip_render: "test.html"    # source 文件夹下指定文件

skip_render: test/*    # 单个文件夹下全部文件

skip_render: test/*.md    # 单个文件夹下指定类型文件

skip_render: test/**    # 单个文件夹下全部文件及子文件

skip_render:         # 多个文件夹以及其他情况
  - test/*
  - test/*.html
```

> 博主自己的配置如下

```yaml
# 跳过 hexo 渲染
skip_render:
  - anires/**
  - assets/**
  - gitment/**
  - baidu_sitepush/**
  - canvas_nest/**
  - docs/**
  - 'baidu_verify_QzGNSJ7F59.html'
  - '*.html'
  - '*.js'
  - README.md
  - '*.sh'
  - '*.txt'
```

> 注：若修改配置后不见效果，先执行 ```hexo clean``` 后再执行 ```hexo g``` 重新编译
