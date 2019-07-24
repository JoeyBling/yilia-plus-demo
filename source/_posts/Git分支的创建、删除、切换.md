---
title: Git分支的创建、删除、切换
date: 2019.07.01 10:06
tags:
  - 日记本
description: Git分支的创建、删除、切换
copyright: true
---
##### 1、本地创建新分支并切换到新分支
```shell
# git checkout -b 分支名
```
#####  2、提交分支到远程仓库
```shell
# git push origin 分支名
```
#####  3、切换分支
```shell
# git checkout 分支名
```
<!--more-->
##### 4、删除远程分支
```shell
# git push origin --delete 分支名
```
##### 5、删除本地分支
```shell
# git branch -D 分支名
```

> Tips：其他分支命令

- 查看当前分支 `git branch`
- 查看所属分支 `git branch -a`
