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

import VueAMap from 'vue-amap';

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '1da42474be95ab16e48dc35ac5256f5c',
  // 高德地图的插件，没有引用的插件需要进行添加
  plugin: ['AMap.Geolocation','AMap.Geocoder','AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});



new Vue({

  render: h => h(App),
  router,
  store
}).$mount('#app')
