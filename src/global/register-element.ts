import { App } from 'vue'

import * as ElIconModules from '@element-plus/icons'
// 单独引入loading 样式
import 'element-plus/theme-chalk/el-loading.css'

// 将el-icon的组件名称AbbbCddd转化为i-abbb-cddd形式
// 此前用switch做组件名时因关键字重复报错，所以格式统一加了前缀
// 例：Switch转换为i-switch，ArrowDownBold转换为i-arrow-down-bold
function _transElIconName(iconName: string): string {
  return 'i' + iconName.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase())
}
import {
  ElButton,
  ElTable,
  ElAlert,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElLoading,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElBreadcrumb,
  ElBreadcrumbItem
} from 'element-plus'
const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElBreadcrumb,
  ElBreadcrumbItem
]
const plugins = [ElLoading]
export function registerElement(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }

  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}

export function registerIcon(app: App): void {
  for (const iconName in ElIconModules) {
    app.component(_transElIconName(iconName), ElIconModules[iconName])
  }
}
