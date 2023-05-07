# KOA demo
middleware -> api -> service -> model
middleware -> api -> service -> web3

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
