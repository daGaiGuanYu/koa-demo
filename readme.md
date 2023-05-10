# Nodejs Server APP Demo
只办三件事，简单、简单、还是他妈的简单。

> 这玩意没名字，以下简称 nsad

当我想做一个小玩意，它正好需要一点后端支持时，我可不想弄一大堆过来，用宰牛刀杀鸡。
+ 没有类型？无所谓，typescript 是宰牛用的
+ 连 MySQL 都不用安装，用 sqlite3 存数据，安装一个数据库好麻烦

适合用于小玩意，当然，也只能用于小玩意。

## 走起~
##### development
``` bash
npm install
npm run dev
```

##### production
可以直接使用 node 跑起来应用：
``` bash
npm install
node app/main/index.js
```
如果你想在退出终端时，保持程序运行，可以看看 nohup 的用法

如果，如果你需要：
+ 规范的日志（存到文件）
+ 启动应用（应用崩了，会帮你重启；服务器重启时，也会帮你自动启动应用）

那么，建议生产环境使用 [pm2](https://zhuanlan.zhihu.com/p/628238542) 启动应用（而非上面那种直接使用 Node.js 的方式）
``` bash
npm install -g pm2 # 可能需要 sudo
```

安装 PM2 之后：
``` bash
npm install # 安装应用依赖
npm run pro # 启动应用
```

## 开发指引
[在这里](./introduction.md)

## TODO
+ 404
+ 不要 migration
