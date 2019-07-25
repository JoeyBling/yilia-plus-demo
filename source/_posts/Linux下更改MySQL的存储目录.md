---
title: Linux下更改MySQL的存储目录
date: 2018-08-06 17:06
tags: Linux
description: Linux下更改MySQL的存储目录
---
##### 重要步骤：一定要先停止Mysql
```shell
# service mysqld stop
```
##### 1、创建目标文件夹
```shell
# mkdir -p /data/mysql
# chown -R mysql.mysql /data/mysql/
```
##### 2、迁移命令
```shell
# mysql_install_db --user=mysql --basedir=/usr --datadir=/data/mysql
```
<!--more-->
##### 3、为避免麻烦，删掉原文件夹/var/lib/mysql
```shell
# rm -rf /var/lib/mysql/*
```
##### 4、修改/etc/my.cnf配置文件
```shell
[mysqld]
datadir=/data/mysql
```
##### 5、启动mysql
```shell
# chkconfig mysqld on
# service mysqld restart
```