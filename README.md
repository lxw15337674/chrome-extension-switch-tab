# switchtab

通过编号，快速切换tab

## todo

- [ ] 可以配置是否修改title
- [ ] 保存在storage
- [ ] 初始化时reload所有页面

## 快捷键

| 快捷键   | 操作                    |      |
| -------- | ----------------------- | ---- |
| alt+num  | 切换到对应的num标签页   |      |
| ctrl+num | 设置当前标签页为num编号 |      |
|          |                         |      |

## 踩坑

### 关于持久化保存

重新打开浏览器tabid、windowid是会变化的。所以只能存在sessionStorage中



## 依赖

脚手架：https://github.com/chibat/chrome-extension-typescript-starter.git
