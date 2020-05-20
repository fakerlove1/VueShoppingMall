import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import home from "./components/home/home";
import login from "./components/login/login";
import myself from "./components/self/myself";
import information from "./components/self/information";
import addaddress from "./components/self/addaddress";
Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'home', component: home },
        { path: '/login', name: 'login', component: login },
        {
            path: '/myself',
            name: 'myself',
            component: myself,
            children: [
                {
                    path: '/',
                    component: information
                },
                {
                    path: '/address',
                    component: addaddress
                }
            ]
        },
    ]
})