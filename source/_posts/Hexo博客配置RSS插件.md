---
title: Hexo博客配置RSS插件
date: 2019.07.23 15:49
tags: Hexo
description: Hexo博客配置RSS插件
---
##### Tips:前导必备
- [博主博客地址](https://zhousiwei.gitee.io/)
- 博主使用的是**[hexo-theme-yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus)**主题

------------------
### 1、安装rss插件

> 在站点根目录下安装

```bash
npm install hexo-generator-feed
```

<!--more-->
### 2、配置`_config.yml`文件，启用插件

```yaml
# Extensions
plugins:
  hexo-generator-feed
#Feed Atom
feed:
  type: atom
  path: atom.xml
  limit: 20
```

### 3、在[hexo-theme-yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus)主题添加RSS订阅配置`(可以跳过此步骤)`

> theme-yilia-plus

```yaml
# RSS订阅
rss: /atom.xml
```

### 4、生成RSS订阅文件
```
hexo g
```

![](/images/2743275-b19c2b7b98555d4d.png)
