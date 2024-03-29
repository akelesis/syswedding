
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faQrcode, faPlus, faMinus, faGift, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

library.add(faQrcode, faPlus, faMinus, faGift, faPenToSquare)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
