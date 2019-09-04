---
title: Hexo博客集成Gitment评论
date: 2019.07.24 16:52
tags: Hexo
description: Hexo博客集成Gitment评论
---
##### Tips:前导必备
- [博主博客地址](https://zhousiwei.gitee.io/)
- 博主使用的是**[hexo-theme-yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus)**主题

> Gitment 是一位作者实现的一款基于 GitHub Issues 的评论系统。支持在前端直接引入，不需要任何后端代码。可以在页面进行登录、查看、评论、点赞等操作，同时有完整的 `Markdown` / `GFM` 和代码高亮支持。尤为适合各种基于 GitHub Pages 的静态博客或项目页面。

<!--more-->
------------------
### 1、注册 OAuth Application
> 注册一个新的 OAuth Application ➡️ [OAuth Application](https://github.com/settings/applications/new)

- `Application name` 应用名称(根据实际来填写)
- `Homepage URL` 主页网址(应用程序主页的完整URL)
- `Application description` 应用说明(应用描述)
- `Authorization callback URL` 授权回调URL(一般是博客的域名)

![](/images/2743275-850f640ca28522cf.png)

### 2、配置[hexo-theme-yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus)主题

###### 注册完成后得到Client ID和Client Secret
![](/images/2743275-79e9217bf5e1e2b2.png)

##### 修改[hexo-theme-yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus)主题的配置文件`_config.yml`
```yaml
gitment_owner: JoeyBling      #你的 GitHub ID
gitment_remote: false  # 是否使用官方js(false可以提升访问速度)
gitment_repo: 'yilia-plus-demo'          #存储评论的 repo
gitment_oauth:
  client_id: '*********'           #client ID
  client_secret: '*********'       #client secret
```

### 3、重新编译运行即可查看效果
```bash
hexo s -g
```
> **hexo-theme-yilia-plus配置Demo ➡️ [https://joeybling.github.io/yilia-plus-demo](https://joeybling.github.io/yilia-plus-demo)**

![](/images/2743275-9bd93b4ded42a272.png)
