import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import i18n from './plugins/i18n'
import { store, key } from './store/index'

loadFonts()

createApp(App).use(store, key).use(router).use(vuetify).use(i18n).mount('#app')
