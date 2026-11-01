# Google Calendar 批量移动 / 改日程

零依赖 Chrome MV3 插件 MVP，中文界面，仅操作当前视图可见事件。

1. 打开 `chrome://extensions`，开启「开发者模式」。
2. 点击「加载已解压的扩展程序」，选择本目录。
3. 打开或刷新 https://calendar.google.com/，勾选事件，核对并填写开始、结束时间。
4. 选择偏移量，生成操作清单，核对后执行。执行时保持当前标签页打开，不要操作 Google 页面。

全天事件只接受天偏移，清单结束日期为不含当日。编辑器日期格式、Google 语言或重复事件弹窗不支持时会记录失败；复制清单手动处理。详情见 [功能地图](docs/FEATURE_MAP.md)。

每天免费执行 3 次（本地日期重置，执行失败也计次；预览免费）。点击扩展图标进入 options，输入本地解锁码。小红书私信『珊哥爱读书』获取解锁码。本地校验不构成安全付费授权，开发验证可运行 `node scripts/gen-license.mjs`。

运行测试：`npm test`，无需安装依赖。纯逻辑 UMD 模块同时支持浏览器和 Node。没有 Calendar API、OAuth secret、远程服务或数据上传。
