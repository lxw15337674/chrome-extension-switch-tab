# switchtab

Add keyboard shortcuts to switch tabs。
quickly switch between tabs，No mouse needed!
★ command

- marker tab 
- switch marked tab

★ about shortcuts
need to set the command shortcut keys by self

★ Support and source code
https://github.com/lxw15337674/chrome-extension-switch-tab

## todo

- [x] 跨窗口切换
- [x] 注册浏览器的全局快捷键
- [x] title标记
- [ ] 可以配置是否修改title
- [ ] 增加多语言

## 限制

1. 由于浏览器快捷键限制，需要用户自行手动设置快捷键。
1. 插件安装前打开的页面编号，无法title标记，但不影响使用。

## 推荐快捷键设置

| 快捷键      | 操作                    |
| ----------- | ----------------------- |
| alt+数字键  | 切换到对应的num标签页   |
| ctrl+数字键 | 设置当前标签页为num编号 |
|             |                         |

## 踩坑

### 缓存

重新打开浏览器tabid、windowid是会变化的。

### 浏览器快捷键

插件内置最多只能设置4个快捷键，但是可以设置多个命令，可以用户自行设置命令对应的快捷键。我本来以为是命令也只有4个，所以通过在content-script里进行监听按键，这样做的缺点：

1. 必须页面加载完后才能进行编号

2. 系统的设置页面、新标签页不能编号和切换。
3. 插件第一次加载时必须reload之前的页面才能使用

### title mark

要监听url变化，例如单页面应用，微前端网站。

刷新页面初始化时也要重新mark。

### background.js 休眠Bug

一段时间不使用后，background会休眠，清空闭包的keys（无语），所以不能通过闭包保存keys,需要通过storage保存。

https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#state

![img](https://wowd7vt38j.feishu.cn/space/api/box/stream/download/asynccode/?code=ZjFkZGU0MmU4M2YyYzAzOWMyNjhiODMxOTM0NzYxODdfSHFBVHAwSE50RDdOSHdYQjFHZDMwMm83UzFyaW1TeXJfVG9rZW46Ym94Y25MSlpmZ3RYTzVGaGtPUERDTmxBcExjXzE2NDYzMDAyNTA6MTY0NjMwMzg1MF9WNA)



## 依赖

脚手架：https://github.com/chibat/chrome-extension-typescript-starter.git
