---
title: Git彻底删除历史提交记录的方法
date: 2019.06.05 10:22
tags:
  - 日记本
description: Git彻底删除历史提交记录的方法
---
###### 1、查看Git提交记录
```shell
# git log
```
--------
###### 2、找到需要回滚到的提交点，复制它的hash值
![](/yilia-plus-demo/images/2743275-f79de5b6d7280d81.png)
```shell
# git reset --hard 你复制的hash值
```
<!--more-->
--------
###### 3、将当前指向的head推到git
```shell
# git push --force
```
