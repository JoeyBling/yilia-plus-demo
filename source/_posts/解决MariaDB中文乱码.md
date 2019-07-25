---
title: 解决MariaDB中文乱码
date: 2018-04-26 15:46
tags: Linux
description: 解决MariaDB中文乱码
---
#### 1、检查自己数据库编码
```shell
# mysql -uroot -proot
# show VARIABLES like 'char%';
```

![](/yilia-plus-demo/images/2743275-aed00e544adf23d4.png)
<!--more-->
#### 2、更改Client和Server编码都是UTF-8

```shell
# vim /etc/my.cnf.d/server.cnf
```

**在`server.cnf`中`[mysqld]`标签下添加代码**

```properties
	init-connect='SET NAMES utf8'
	character-set-server = utf8
```

![](/yilia-plus-demo/images/2743275-109f93534d06e671.png)

###### 重启MariaDB即可
```shell
# systemctl restart mariadb
--- 如果已经添加为服务
# service mysqld restart
```
