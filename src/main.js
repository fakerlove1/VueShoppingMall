import Vue from 'vue'
import App from './App.vue'

<<<<<<< HEAD
// 使用VueAwesomeSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// 使用ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false


=======
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

>>>>>>> 3cc25cd51f9ad9ae5a46fae7a7d02d930a6000f4
new Vue({
  render: h => h(App),
}).$mount('#app')
