import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import VueStorage from 'vue-ls'
import YmapPlugin from 'vue-yandex-maps'
import settings from './ymaps'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueStorage)
app.use(YmapPlugin, settings)
app.mount('#app')