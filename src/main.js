import Vue from 'vue'
import App from './App.vue'

// 使用VueAwesomeSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// 使用ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//这里是使用了路由
import router from "./index";
import store from "./store";

Vue.config.productionTip = false


new Vue({

  render: h => h(App),
  router,
  store
}).$mount('#app')
