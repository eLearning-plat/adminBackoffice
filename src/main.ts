import { createApp } from "vue";
import "./assets/index.css";
//@ts-expect-error
import router from "./router";
//@ts-expect-error
import App from "./App.vue";
import { createAuth0 } from "@auth0/auth0-vue";

const app = createApp(App);

app.use(router);

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
