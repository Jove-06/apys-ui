import { createApp } from "vue";
import { createPinia } from "pinia";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { vfmPlugin } from "vue-final-modal";
import { createLogger } from "vue-logger-plugin";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import ModalDepositToBalance from "@/modals/ModalDepositToBalance.vue";
import ModalWithdrawFromBalance from "@/modals/ModalWithdrawFromBalance.vue";
import ModalDepositToVault from "@/modals/ModalDepositToVault.vue";
import ModalWithdrawFromVault from "@/modals/ModalWithdrawFromVault.vue";
import DropDown from "@/components/DropDown.vue";
import Vue3Autocounter from "vue3-autocounter";

import "@/assets/styles/main.scss";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app
  .use(createPinia())
  .use(router)
  .use(VueLoading)
  .use(createLogger({}))
  .use(
    createVuetify({
      components,
      directives,
    })
  )
  .use(
    vfmPlugin({
      key: "$vfm",
      componentName: "VueFinalModal",
      dynamicContainerName: "ModalsContainer",
    })
  );

// Register modals
app.component("ModalDepositToBalance", ModalDepositToBalance);
app.component("ModalWithdrawFromBalance", ModalWithdrawFromBalance);
app.component("ModalDepositToVault", ModalDepositToVault);
app.component("ModalWithdrawFromVault", ModalWithdrawFromVault);

// Register global components
app.component("DropDown", DropDown);
app.component("Vue3Autocounter", Vue3Autocounter);

app.mount("#app");
