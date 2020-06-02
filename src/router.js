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
import enterprise from "./components/enterprise/enterprise";
import buy from "./components/shopping/buy";
import trend from "./components/self/trend";
import interest from "./components/self/interest";
import goods_modify from "./components/enterprise/goods_modify";
import goods_main from "./components/enterprise/goods_main";

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
                {
                    path: "trend",
                    component: trend
                },
                {
                    path: "interest",
                    component: interest
                },
            ]
        },
        // 跳转到商家页面
        {
            path: '/enterprise',
            name: 'enterprise',
            component: enterprise,
            children: [
                // 商家的修改页面
                {
                    path: "modify",
                    component: goods_modify
                },
                {
                    path: '',
                    component: goods_main
                },
            ]
        },

        // 下面是  商品信息的页面
        {
            path: '/commodity/:goods_id' ,
            component: commodity
        },

        { path: '/buy',
            name: 'buy',
            component: buy
        },


    ]
})