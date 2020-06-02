<template>
    <div class="myself">
        <el-row class="content tac">

            <!--            这个是 旁边的菜单栏-->
            <el-col class="left" :span="3" :offset="3">
                <el-menu
                        :default-active="$route.path"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        router
                >
                    <el-menu-item index="/">
                        <i class="el-icon-menu"></i>
                        <span slot="title">我的首页</span>
                    </el-menu-item>

                    <el-submenu index="1">

                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>个人信息</span>
                        </template>

                        <el-menu-item index="/myself" >
                            <span slot="title">查看</span>
                        </el-menu-item>
                        <el-menu-item index="/myself/addinformation" >
                            <span slot="title">修改</span>
                        </el-menu-item>
                        <el-menu-item index="/myself/address" >
                            <span slot="title">地址</span>
                        </el-menu-item>
                    </el-submenu>

                    <el-menu-item index="/myself/purse">
                        <i class="el-icon-menu"></i>
                        <span slot="title">我的钱包</span>
                    </el-menu-item>
                    <el-menu-item index="/myself/account">
                        <i class="el-icon-document"></i>
                        <span slot="title">我的账单</span>
                    </el-menu-item>


                    <el-menu-item index="/myself/interest">
                        <i class="el-icon-setting"></i>
                        <span slot="title">我的动态</span>
                    </el-menu-item>

                    <el-menu-item index="/myself/trend">
                        <i class="el-icon-setting"></i>
                        <span slot="title">我的关注</span>
                    </el-menu-item>

                    <el-menu-item index="/myself/shoppingcar">
                        <i class="el-icon-setting"></i>
                        <span slot="title">我的购物车</span>
                    </el-menu-item>
                </el-menu>
            </el-col>

            <!--            这个是里面的小内容 -->
            <el-col :span="18" class="right" >
                <router-view ></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import $ from "jquery"
    // const person =;
    // 个人 主页， 展示自己的信息
    export default {
        name: "myself",
        mounted() {
            $(".left").height($(document).height());
            $(".myself").height($(document).height());
        },
        data() {
            return{

            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .myself {
        width: 100%;
    }
    .content{
        width: 100%;
        height: 100%;
    }

    .left{
        background-color: #fff;
        height: 100%;
    }
    .right{
        background-color: #fff;
        height: auto;
        overflow-y:scroll;
    }
    .left>ul{
        height: 100%;
    }
</style>