import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Registrar Pinia y router
app.use(createPinia())
app.use(router)

// Auto-registrar todos los componentes en `src/components`
// Usa Vite's import.meta.glob para importar todos los .vue
const modules = import.meta.glob('./components/**/*.vue', { eager: true })
for (const path in modules) {
	// el módulo importado con { eager: true } expone `.default`
	const mod: any = (modules as Record<string, any>)[path]
	const comp = mod && mod.default
	if (!comp) continue
	// usar el nombre del componente si está definido, sino derivarlo del nombre de archivo
	const name = comp.name || path.split('/').pop()?.replace(/\.vue$/, '')
	if (name) app.component(name, comp)
}

app.mount('#app')
