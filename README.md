# vue3-ts-cms

# EL-loading 加载样式问题
  按照官方按需引入 [文档](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5) 按照相应配置后 发现 loading的样式没有引入 

```typescript
const plugins = [ElLoading]
export function registerElement(app: App): void {
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}
```

注册方式是使用 <font color=red>插件</font>形式，所以webpack 引入不了样式

目前能想到的解决方式是

// 单独引入loading 样式

```typescript
import 'element-plus/theme-chalk/el-loading.css'
```

