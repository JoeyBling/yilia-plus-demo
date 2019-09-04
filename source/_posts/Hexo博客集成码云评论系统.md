---
title: Hexo博客集成码云评论系统
date: 2019.07.25 10:39
tags: Hexo
description: Hexo博客集成码云评论系统
---
##### Tips:前导必备
- [博主博客地址](https://zhousiwei.gitee.io/)
- 博主使用的是**[hexo-theme-yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus)**主题

## 简介
> giteement系统是基于[gitment](https://github.com/imsun/gitment)的源码开发和扩展的 ➡️ [https://gitee.com/zhousiwei/giteement](https://gitee.com/zhousiwei/giteement)
> [giteement](https://gitee.com/zhousiwei/giteement)还在继续维护优化中…欢迎小伙伴们加入一起维护

<!--more-->
###### 目前实现以下功能：

1. 基于[码云](https://gitee.com/zhousiwei)的issues来进行评论的,所以需要有码云账号。
2. 实现了类似码云issues的回复功能，评论开头用@符号选择你要回复的人，回复完毕，如果你要回复的人登录码云，会有消息提示。

> 效果展示 ➡️ [https://zhousiwei.gitee.io/](https://zhousiwei.gitee.io/)

------------------
### 1、配置第三方应用

&#160;&#160;&#160;&#160;使用码云的issues作为评论系统，就要使用码云来登录评论，所以需要在码云上配置第三方应用。

> 注册一个新的第三方应用 ➡️ [https://gitee.com/oauth/applications/new](https://gitee.com/oauth/applications/new)

- 应用名称(根据实际来填写)
- 应用描述(根据实际来填写)
- 应用主页(应用程序主页的完整URL)
- 应用回调地址(一般是博客的域名)
- **权限请选择`issues`、`notes`**

![](/images/2743275-7a58969acdd07ef4.png)


### 2、配置[hexo-theme-yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus)主题

###### 注册完成后得到Client ID和Client Secret
![](/images/2743275-fa10cedf90482f2f.png)


##### 修改[hexo-theme-yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus)主题的配置文件`_config.yml`

```yaml
giteement:
  enable: true  # 是否启用码云评论系统
  # 是否使用官方js(false可以提升访问速度)
  remote: false
  redirect_uri: https://zhousiwei.gitee.io/yilia-plus-demo   # 应用回调地址(请和配置的第三方应用保持一致)
  # 不能更改(网上开源项目https://github.com/Rob--W/cors-anywhere作者提供的专门用来跨域服务器的配置)
  oauth_uri: https://cors-anywhere.herokuapp.com/https://gitee.com/oauth/token
  giteeID: zhousiwei  # 你的码云账号英文名
  # 存储评论的 repo
  repo: yilia-plus-demo
  gitment_oauth:
    client_id: '*********'           #client ID
    client_secret: '*********'       #client secret
```

### 3、重新编译运行即可查看效果

```bash
hexo s -g
```

> 针对不同文章的date属性生成id，只要保证每篇文章有date属性并且不重复即可

> **hexo-theme-yilia-plus配置Demo ➡️ [https://gitee.com/zhousiwei/yilia-plus-demo](https://gitee.com/zhousiwei/yilia-plus-demo)**

### 4、待解决问题
1. giteement的UI是直接使用gitment的UI，不是很好看，后期准备优化。
2. 新增文章的时候需要登录自己的gitee账号，点击评论初始化按钮。(后面考虑实现自动初始化 Gitment 评论脚本)

![](/images/2743275-e96101fc56ce6182.png)

![](/images/2743275-d966b9a3f1fcd776.png)

### 效果图

#### 1、整体UI
![](/images/2743275-f139337ae5992f82.png)

#### 2、@回复功能
![](/images/2743275-6b437e4be899016a.png)

### 其他主题例子
#### 1、主题[landscape](https://github.com/hexojs/hexo-theme-landscape)中使用
###### 修改`themes/landscape/layout/index.ejs`文件

![](/images/2743275-6896ffbdbf941c3a.png)
###### 修改`themes/landscape/layout/_partial/article.ejs`文件

![](/images/2743275-b5bc10f5b793da13.png)
###### 增加themes/landscape/layout/_partial/comment.ejs

```ejs
<% if (!index && post.comments && theme.giteement && theme.giteement.enable){ %>
  <div id="giteement-ctn"></div>
  <% if (theme.giteement && theme.giteement.remote){ %>
    <!-- <link rel="stylesheet" href="https://giteement.oss-cn-beijing.aliyuncs.com/wd-discuss.css"> -->
    <!-- <script src="https://giteement.oss-cn-beijing.aliyuncs.com/discuss_hexo.js"></script> -->
    <link rel="stylesheet" href="https://giteement.oss-cn-beijing.aliyuncs.com/default.css">
    <script src="https://giteement.oss-cn-beijing.aliyuncs.com/giteement.browser.js"></script>
  <% } else { %>
    <link rel="stylesheet" href="<%=config.root%>assets/default.css">
    <script src="<%=config.root%>assets/giteement.browser.js"></script>
  <% } %>
  <script>
  var giteement = new Giteement({
    id: '<%=page.date.format('YYYYMMDDHHmmss')%>',
    owner: '<%=theme.giteement.giteeID%>',
    repo: '<%=theme.giteement.repo%>',
    backcall_uri: '<%=theme.giteement.redirect_uri%>',
    oauth_uri: '<%=theme.giteement.oauth_uri%>',
    oauth: {
      client_id: '<%=theme.giteement.gitment_oauth.client_id%>',
      client_secret: '<%=theme.giteement.gitment_oauth.client_secret%>'
    },
  })
  giteement.render('giteement-ctn')
  </script>
<% } %>
```
#### 2、主题[next](https://github.com/theme-next/hexo-theme-next)中使用
###### 修改`themes/next/layout/index.swig`文件

![](/images/2743275-8d0e237f78f50a61.png)
###### 修改`themes/next/layout/_partials/comments.swig`文件
> 把`theme.giteement.ClientID`和`theme.giteement.ClientSecret`改为`theme.giteement.gitment_oauth.client_id`和`theme.giteement.gitment_oauth.client_secret`

![](/images/2743275-01b6301e3e5947c0.png)


> 转载自原作者[eillott](https://eillott.gitee.io/2018/08/29/Hexo%E6%8E%A5%E5%85%A5%E7%A0%81%E4%BA%91%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F/)的文章，进行修改了一部分，并且集成了**[hexo-theme-yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus)**主题