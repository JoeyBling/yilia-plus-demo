#!/bin/sh
npm install gulp -g
npm install gulp --save
npm install gulp-minify-css --save
npm install gulp-uglify --save
npm install gulp-htmlmin --save
npm install gulp-htmlclean --save
npm install gulp-imagemin --save

# 安装gulp-imagemin 错误请执行以下语句
# 卸载gulp-imagemin
# npm uninstall gulp-imagemin --save
# sudo npm i gulp-imagemin --unsafe-perms

# 解决【Gulp打包问题】 GulpUglifyError: unable to minify JavaScript
# 解决 gulp-uglify 压缩JavaScript 不兼容 es5 语法的问题
npm install babel-core@6.26.3 --save
npm install gulp-babel@7.0.1 --save
npm install babel-preset-es2015@6.24.1 --save
# gulp-babel 取消严格模式方法("use strict")
npm install babel-plugin-transform-remove-strict-mode --save

# npm install @babel/core --save
# npm install @babel/preset-es2015 --save
# npm install gulp-babel@7 --save
