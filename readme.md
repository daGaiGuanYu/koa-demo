# KOA demo
只办三件事，简单、简单、还是他妈的简单。

当我想做一个小玩意，它正好需要一点后端支持时，我可不想弄一大堆过来，用宰牛刀杀鸡。
+ 没有类型？无所谓，typescript 是宰牛用的
+ 连 MySQL 都不用安装，用 sqlite3 存数据，安装一个数据库好麻烦

适合用于小玩意，当然，也只能用于小玩意。

## 面向过程
+ middleware -> api -> service -> model
+ middleware -> api -> service -> web3

## sql database
[knex document](https://knexjs.org/)

``` bash
npm install -g knex
```

## middleware
##### koa-bodyparser
解析 json, form, text  
[github](https://github.com/koajs/bodyparser)

> 不支持 multipart，可使用 [@koa/multer](https://github.com/koajs/multer)

##### 数据迁移
``` bash
cd app/model
knex migrate:latest
```

## pm2

## TODO
+ 404
+ 不要 migration
