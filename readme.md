# Nodejs Server APP Demo
只办三件事，简单、简单、还是他妈的简单。

> 这玩意没名字，以下简称 nsad

当我想做一个小玩意，它正好需要一点后端支持时，我可不想弄一大堆过来，用宰牛刀杀鸡。
+ 没有类型？无所谓，typescript 是宰牛用的
+ 连 MySQL 都不用安装，用 sqlite3 存数据，安装一个数据库好麻烦

适合用于小玩意，当然，也只能用于小玩意。

## 走起~
除了必要的 Node.js 和 NPM（NPM 一般随 Node.js 一起安装），还建议使用 [pm2](https://zhuanlan.zhihu.com/p/628238542) 启动开发、生产应用：
``` bash
npm install -g pm2 # 可能需要 sudo
```

主要使用了 PM2 的两个功能：
+ 规范的日志（存到文件）
+ 启动应用（应用崩了，会帮你重启；服务器重启时，也会帮你自动启动应用）

> 但 PM2 不是必要的，如果你不喜欢，可以跳过 development、production 部分

##### development
``` bash
npm install
npm run dev
```

##### production
``` bash
npm install
npm run pro
```

##### 不喜欢 pm2
启动项目：
``` bash
npm install
node app/main/index.js
```

## 开发指引
[在这里](./introduction.md)

## TODO
+ 404
+ 不要 migration
