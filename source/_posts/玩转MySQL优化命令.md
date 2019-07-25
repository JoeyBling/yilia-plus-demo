---
title: 玩转MySQL优化命令
date: 2019.05.06 18:05
tags: MySQL
description: 玩转MySQL优化命令
---
##### 1、MySQL更改为只能本地登录
```shell
# use mysql;
# select user,host,Password from user where user='root';
# delete from user where user='root' and host='%';
```
<!--more-->
---
##### 2、MySQL授予外网登陆权限
`grant all privileges on *.* to 授予外网登陆的用户名@'%' identified by '密码' WITH GRANT OPTION;`
```shell
# grant all privileges on *.* to root@'%' identified by 'root' WITH GRANT OPTION;
# flush privileges;
```
---
##### 3、[更改MySQL的存储目录](https://www.jianshu.com/p/81b253355ffd)
