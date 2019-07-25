---
title: SpringBoot 2.0 更新记录
date: 2018-08-21 10:43
tags: Java
description: SpringBoot 2.0 更新记录
---
#### 1、Spring Boot 2.0 要求Java 版本必须8以上
#### 2、配置属性的重定位
| Old property | New property |
| ------------ | ------------ |
| server.context-path | server.servlet.context-path |
| server.context-parameters.* | server.servlet.context-parameters.* |
| server.jsp.class-name | server.servlet.jsp.class-name |
| server.jsp.init-parameters.* | server.servlet.jsp.init-parameters.* |
| server.jsp.registered | server.servlet.jsp.registered |
| server.servlet-path | server.servlet.path |
