import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-green/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue);
app.use(createPinia())

app.use(router)

app.mount('#app')
