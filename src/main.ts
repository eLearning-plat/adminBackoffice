import { createApp } from 'vue'
import './assets/index.css'
import router from './router'
import App from './App.vue'
import store from './store/store'; 

const app = createApp(App)
app.use(store); 
app.use(router)

app.mount('#app')
