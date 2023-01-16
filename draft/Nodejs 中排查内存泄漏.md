# Node 应用如何有效排查内存泄漏
「回顾2022，展望2023，我正在参与2022年终总结征文大赛活动」

## 前言
在 `Nodejs` 服务端开发的场景中，`内存泄漏` 绝对是最令人头疼的问题；
只要项目一直在开发迭代迭代，那么出现 `内存泄漏` 问题时绝对不可避免，只是出现的时间点不同而已。
所以作为一名优秀的 `Nodejs` 工程师一定需要系统性掌握有效的 `内存泄漏` 排查方法，缩短内存泄漏排查时间来降低业务上的损失。  

这里我会以一次排查公司研发平台 `Nodejs` 服务 `内存泄漏` 的案例来讲解。

## 问题描述  
2022 Q3 的某天，研发用户群中反馈我们的研发平台不能访问，后台中出现了大量的异常任务未完成。
第一反应就是可能出现了内存泄漏，由于服务接入了监控（`prometheus` + `grafana`）我直接就到 grafana 监控面板下查看服务器的状态。果然出现了内存泄漏当时的监控面板大概如下

![DX 内存泄漏监控图](./DX%20%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F%E7%9B%91%E6%8E%A7%E5%9B%BE.png)

从图中可以很明显的看出


https://www.cnblogs.com/strick/p/16313530.html

https://blog.csdn.net/pengpengzhou/article/details/106811717








## 总结
1. 服务需要接入监控，方便第一时间确定问题类型
2. 




















## 一些概念
### Nodejs 调试模式
[Node 调试模式](https://nodejs.org/en/docs/guides/debugging-getting-started/)

在启动 Node 时加入 --inspect 参数可以开启调试模式。

### heapdump

### V8 中的 GC

> 手动触发 GC Node.js支持一个命令行选项 `--expose-gc`，该选项将向该 `global` 对象添加 `gc()` 函数，比如您可以这样执行您的代码：

### 压测工具
[压测介绍](https://www.cnblogs.com/goldsunshine/p/16607820.html)

[wrk 使用](https://juejin.cn/post/6987391274508615694)

+ 文章类型：技术总结
+ 文章分类：代码人生
