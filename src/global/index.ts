import { App } from 'vue'
import { registerElement, registerIcon } from './register-element'
export function registerApp(app: App): void {
  registerElement(app)
  registerIcon(app)
}
