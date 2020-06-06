import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex);
// 这个是  Vuex 全局变量的
export default new Vuex.Store({

// 存储的公共对象

    state: {
        user:{
            status:false,
            imgurl:require("./assets/image/1.jpg"),
            username:"小白",
            userid:0,
            userlev:1,
            gender:1,
            money:0,
        }
    },
    //  这个是 属性可以进行 修改全局变量
    mutations:{
        changeuser(state,k){
          state.user=k;
        },
    },
    // 可以进行 异步操作
    actions:{

    }
})