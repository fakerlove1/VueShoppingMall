<template>
    <div>
        <div class="login" v-if="!flag" >
            <a href="https://www.baidu.com" @click.prevent="login">登录</a>
            <span>/</span>
            <a href="https://www.baidu.com" @click.prevent="login">注册</a>
        </div>
        <div class="touxiang" v-else @click="myself">
            <el-avatar :size="50" :src="login_image" ></el-avatar>
        </div>
    </div>
</template>

<script>

    // 这个是登录注册的 导航条里面的内容
    export default {
        name: "login",
        methods:{
            //跳转到登录页
            login(){
                this.$router.push("/login");
            },

            // 跳转到 个人首页
            myself(){
                this.$router.push("/myself");
            }
        },
        props:{
            flag:Boolean,
            login_image:String
        }
    }
</script>

<style scoped>
    .login{
        color: white;
        width: 100%;
        height: 48px;
    }
    .login>span{
        margin-left: 5px;
        margin-right: 5px;
        font-size: 20px;
    }
    .login>a{
        text-decoration: none;
        color: white;
        font-size: 20px;
        width: 40%;
        height: 48px;
        line-height: 48px;
        text-align: center;
    }

</style>