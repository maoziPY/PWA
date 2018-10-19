# PWA
PWA demo

link:https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp

特点
1：不可靠的网络中（或断网）也能快速加载
2：推送消息
3：桌面图标
4：顶层全屏模式

步骤
1：构建App Shell
    定义：驱动Progressive Web App用户界面所需的最小的HTML、CSS、JavaScript)
2：设计App Shell
    思路：哪些内容需要立即呈现，需要支持哪些资源（图片，js，样式等）
3：用serviceWorker缓存App Shell并断网情况下从缓存获取资源
4：分别缓存App Shell 和 data
->如何及时更新缓存？=>缓存优先，网络请求回来再更新缓存
->发出的缓存及网络请求，如何知道它是否显示了最新数据？ =>更新卡片时，都有隐藏保存数据存储的时间戳，与传递给更新函数的时间戳对比
5：添加到桌面
->添加manifest.json文件声明应该清单（指定启动哪些内容，如何向用户显示）