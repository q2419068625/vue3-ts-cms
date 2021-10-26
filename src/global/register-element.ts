import { App } from 'vue'
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop
} from 'element-plus'
const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop
]
export default function (app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
