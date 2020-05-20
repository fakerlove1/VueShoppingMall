<template>
    <div class="myself">
        <el-row class="content tac">

            <!--            这个是 旁边的菜单栏-->
            <el-col class="left" :span="3" offset="3">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                    <!--                    -->
                    <el-submenu index="1">

                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>个人信息</span>
                        </template>

                        <el-menu-item index="1-1">

                            <span slot="title">个人信息查看</span>
                        </el-menu-item>
                        <el-menu-item index="1-2">
                            <span slot="title">个人信息修改</span>
                        </el-menu-item>
                        <el-menu-item index="1-2">
                            <span slot="title">添加收获地址</span>
                        </el-menu-item>
                    </el-submenu>

                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">我的钱包</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">我的账单</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-col>

            <!--            这个是里面的小内容 -->
            <el-col :span="18" class="right">
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
        height: 100%;
    }
    .left>ul{
        height: 100%;
    }
</style>