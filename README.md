# switchtab

通过编号，快速切换tab

## todo

- [ ] 可以配置是否修改title
- [ ] 保存在storage
- [ ] 初始化时reload所有页面
- [ ] 注册浏览器的全局快捷键

## 限制

1. 必须页面加载完后才能进行编号
2. 由于浏览器只能注册最多4个快捷键，所以全局只支持切换1-4
3. 系统的设置页面、新标签页不能编号和切换。

## 快捷键

| 快捷键      | 操作                    |      |
| ----------- | ----------------------- | ---- |
| alt+数字键  | 切换到对应的num标签页   |      |
| ctrl+数字键 | 设置当前标签页为num编号 |      |
|             |                         |      |

## 踩坑

### 关于持久化保存

重新打开浏览器tabid、windowid是会变化的。所以只能存在sessionStorage中



## 依赖

脚手架：https://github.com/chibat/chrome-extension-typescript-starter.git
