import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// SCSS
import './assets/scss/style.scss'

// LENIS
import Lenis from 'lenis'

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
