import { createApp } from 'vue'
import './assets/index.css'
import router from './router'
import App from './App.vue'
import store from './store/store'; 

const app = createApp(App)
app.use(store); 
app.use(router)

app.use(
  createAuth0({
    domain: "dev-nokuvgx3njqonar7.us.auth0.com",
    clientId: "qoIlqcpIDY7FCSoED4OjRrtKZmTurOP6",
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  })
);

app.mount("#app");
