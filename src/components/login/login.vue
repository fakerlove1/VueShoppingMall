<script src="../ajax/axios.js"></script>
<template>
    <div class="login">
        <div class="content">
            <el-tabs stretch v-model="flag" class="tab">
                <el-tab-pane label="登录" name="login">
                    <!--                    登录的 布局-->
                    <el-form class="login_form" :model="login">
                        <div class="item top">
                            <div class="item_input">
                                <div class="item_input_i">
                                    <img src="../../assets/icon/person.png">
                                </div>
                                <div class="item_input_input">
                                    <input type="text" placeholder="请输入ID " v-model="login.user_id"/>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="item_input">
                                <div class="item_input_i">
                                    <img src="../../assets/icon/password.png">
                                </div>
                                <div class="item_input_input">
                                    <input type="password" placeholder="请输入密码" v-model="login.user_password"/>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <el-button type="primary" round class="button_login" @click.prevent="f_login">登录</el-button>
                        </div>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册" name="register">

                    <el-form :model="res" label-width="80px">
                        <div class="item top">
                            <div class="item_input">
                                <div class="item_input_i">
                                    <img src="../../assets/icon/person.png">
                                </div>
                                <div class="item_input_input">
                                    <input type="text" v-model="res.user_name" placeholder="请输入昵称"/>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="item_input">
                                <div class="item_input_i">
                                    <img src="../../assets/icon/password.png">
                                </div>
                                <div class="item_input_input">
                                    <input type="password" v-model="res.user_password" placeholder="请输入密码"/>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="item_input">
                                <div class="item_input_i">
                                    <img src="../../assets/icon/password.png">
                                </div>
                                <div class="item_input_input">
                                    <input type="password" v-model="res.two_password" placeholder="请再次确定密码"/>
                                </div>
                            </div>
                        </div>

                        <el-form-item  label="性别">
                            <el-radio v-model="res.radio" label="0" class="gender" >男</el-radio>
                            <el-radio v-model="res.radio" label="1" class="gender" >女</el-radio>
                        </el-form-item>

                        <el-form-item label="注册类型">
                            <el-radio v-model="res.lev" label="1" class="gender" >用户</el-radio>
                            <el-radio v-model="res.lev" label="2" class="gender" >商家</el-radio>
                        </el-form-item>

                        <div class="item">
                            <el-button type="primary" round class="button_login" @click.prevent="resgister">注册
                            </el-button>
                        </div>
                    </el-form>

                </el-tab-pane>
            </el-tabs>

        </div>
    </div>
</template>

<script>

    import $ from 'jquery';
    import Ajax from "../ajax/ajax"

    export default {
        name: "login",
        components: {},
        data() {
            return {
                login: {
                    user_id: "",
                    user_password: "",
                },
                res: {

                    radio: "0",
                    user_name: "",
                    user_password: "",
                    two_password: "",
                    lev: "1",
                },
                flag: "login",
            }
        },
        mounted() {
            // 设置窗口大小
            $(".login").height(window.screen.availHeight);
        },
        methods: {

            f_login() {

                const mstore = this.$store;
                const mrouter = this.$router;
                const mes = this.$message;
                Ajax.login(this.login.user_id, this.login.user_password, function (res, code) {

                    if (code === 200 && res.code === 200) {
                        const result = res.data;
                        const k = {
                            status: true,
                            imgurl: result.user_banner_img,
                            username: result.user_name,
                            userid: result.user_id,
                            gender: result.user_gender,
                            userlev: result.user_lev,
                            money: result.user_money,
                        };

                        // 修改全局变量 ， 登录成功
                        mstore.commit("changeuser", k)
                        // console.log(mstore.state.user)
                        // 登录成功 ，跳转首页
                        if (k.userlev === 1) {
                            mrouter.push("/");
                        } else if (k.userlev === 2) {
                            mrouter.push("/enterprise");
                        }
                    } else {
                        if (code === 400) {
                            mes({
                                showClose: true,
                                message: '对不起，登录失败，请检查网络',
                                type: 'error'
                            });
                        } else {
                            mes({
                                showClose: true,
                                message: res.message,
                                type: 'error'
                            });
                        }
                    }
                });

            },
            resgister() {
                const th = this;
                const mes = this.$message;
                Ajax.Register(this.res.user_name, this.res.user_password,
                    this.res.lev, this.res.radio,
                    function (res, code) {

                        if (code === 200 && res.code === 200) {

                            th.$alert('消息提示', '注册成功，您的 id 为' + res.data, {
                                confirmButtonText: '确定',
                                callback: action => {
                                    th.$message({
                                        type: 'info',
                                        message: `已经知晓id信息了`
                                    });
                                }
                            });

                        } else {
                            if (code === 400) {
                                mes({
                                    showClose: true,
                                    message: '对不起，注册失败，请检查网络',
                                    type: 'error'
                                });
                            } else {
                                mes({
                                    showClose: true,
                                    message: res.message,
                                    type: 'error'
                                });
                            }
                        }

                    })
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
        height: auto;
    }

    .gender {
        width: 30%;

    }

    .el-radio__label {
        font-size: 24px;
    }

    /*是 外面框子的内容*/
    .content {
        padding: 10px;
        position: absolute;
        left: 30%;
        top: 80px;
        width: 35%;
        height: auto;
        background-color: #fff;
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