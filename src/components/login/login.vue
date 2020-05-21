<template>
    <div class="login">
        <div class="content">
            <el-tabs stretch v-model="flag" class="tab">
                <el-tab-pane label="登录" name="login">
                    <!--                    登录的 布局-->
                    <form class="login_form">
                        <div class="item top">
                            <div class="item_input">
                                <div class="item_input_i">
                                    <img src="../../assets/icon/person.png">
                                </div>
                                <div class="item_input_input">
                                    <input type="text" placeholder="请输入姓名"/>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="item_input">
                                <div class="item_input_i">
                                    <img src="../../assets/icon/password.png">
                                </div>
                                <div class="item_input_input">
                                    <input type="text" placeholder="请输入密码"/>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <el-button type="primary" round class="button_login" @click.prevent="login">登录</el-button>
                        </div>
                    </form>
                </el-tab-pane>
                <el-tab-pane label="注册" name="register">

                    <form>
                        <div class="item top">
                            <div class="item_input">
                                <div class="item_input_i">
                                    <img src="../../assets/icon/person.png">
                                </div>
                                <div class="item_input_input">
                                    <input type="text" placeholder="请输入姓名"/>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="item_input">
                                <div class="item_input_i">
                                    <img src="../../assets/icon/password.png">
                                </div>
                                <div class="item_input_input">
                                    <input type="text" placeholder="请输入密码"/>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="item_input">
                                <div class="item_input_i">
                                    <img src="../../assets/icon/password.png">
                                </div>
                                <div class="item_input_input">
                                    <input type="text" placeholder="请再次确定密码"/>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <el-radio v-model="radio" label="1" class="gender" >男</el-radio>
                            <el-radio v-model="radio" label="2" class="gender">女</el-radio>
                        </div>

                        <div class="item">
                            <el-button type="primary" round class="button_login">注册</el-button>
                        </div>
                    </form>

                </el-tab-pane>
            </el-tabs>

        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: "login",
        components: {},
        data() {
            return {
                flag: "login",
                radio: "1"
            }
        },
        mounted() {
            $(".login").height(   window.screen.availHeight);
        },
        methods: {

            login() {

                const k = {
                    status: true,
                    imgurl: require("../../assets/image/2.jpg"),
                    username: "joker",
                    userid: '21323',
                    gender: "1",
                    money: 10000,
                };
                // 修改全局变量 ， 登录成功
                this.$store.commit("changeuser", k)
                // 登录成功 ，跳转首页
                this.$router.push("/");

            }
        }
    }
</script>

<style scoped>
    .login {
        position: relative;
        width: 100%;
        background-image: url(../../assets/image/0.jpg);
    }

    .tab {
        background-color: #fff;
    }

    .gender {
        width: 30%;

    }

    .el-radio__label {
        font-size: 24px;
    }

    /*是 外面框子的内容*/
    .content {
        position: absolute;
        left: 30%;
        top: 80px;
        width: 35%;
        height: 500px;
    }

    .login_form {
        height: 100%;
        width: 100%;
    }

    /*这个是 登录的内容*/
    .item {
        height: 64px;
        width: 100%;
        margin-bottom: 40px;

    }

    .top {
        margin-top: 20px;
    }

    .item > div {
        float: left;
        height: 64px;
    }

    .item_input {
        height: 64px;
        width: 100%;
        position: relative;
    }

    .item_input > div {
        float: left;
        height: 100%;
    }

    /*图标的位置所在 */
    .item_input_i {
        position: absolute;
        left: 5%;
        width: 15%;
        height: 100%;
    }

    .item_input_i > img {
        margin: auto;
        height: 48px;
        width: 48px;
        margin-top: 5px;
    }

    .item_input_input {
        width: 100%;
    }

    /*表示的 是 输入框的格式 */
    .item_input_input > input {
        line-height: 64px;
        margin: auto;
        width: 90%;
        height: 64px;
        background-clip: padding-box;
        border-radius: 50px;
        padding-left: 20%;
        font-size: 20px;
        font-weight: lighter;
        border: none;
        background-color: #F0F0F0;
        overflow: visible;
        box-sizing: border-box;
    }

    .item_input_input > input:focus {
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25);
    }

    .button_login {
        height: 64px;
        width: 90%;
        border-radius: 50px;
        margin: auto;
    }
</style>