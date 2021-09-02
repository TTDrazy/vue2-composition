/*
 * @Author: Drazy
 * @Date: 2021-09-01 16:23:32
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-01 17:31:22
 * @Description: 入口文件
 */
import Vue from "vue";
import App from "./App.vue";
import VueCompositionAPI from '@vue/composition-api'
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueCompositionAPI, { jsx: { enable: true } });
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
