import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import home from "./components/home/home";
import login from "./components/login/login";
import myself from "./components/self/myself";
import information from "./components/self/information";
import addaddress from "./components/self/add_address";
import addinformation from "./components/self/add_information";
import account from "./components/self/account";
import shoppingcar from "./components/self/shopping_car";
import purse from "./components/self/purse";
import commodity from "./components/shopping/commodity";
Vue.use(Router)

export default new Router({
    routes: [
        // 主页面
        { path: '/', name: 'home', component: home },

        // 登录页
        { path: '/login', name: 'login', component: login },

        // 下面是 是 我的页面的信息
        {
            path: '/myself',
            name: 'myself',
            component: myself,
            children: [
                // 子元素中所有的 路径都不要/ ，
                {
                    path: '',
                    component: information
                },
                {
                    path: 'address',
                    component: addaddress
                },
                {
                    path: "addinformation",
                    component: addinformation
                },
                {
                    path: "purse",
                    component: purse
                },
                {
                    path: "shoppingcar",
                    component: shoppingcar
                },
                {
                    path: "account",
                    component: account
                },
            ]
        },

        // 下面是  商品信息的页面
        {
            path: '/commodity' ,component: commodity
        }
    ]
})