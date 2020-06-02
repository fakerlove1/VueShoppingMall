<template>
    <div>
        <el-button class="bu" round type="primary"  @click="add">
            充钱
        </el-button>

        <el-button class="bu" round type="primary" @click="tranfer">
            转账
        </el-button>
    </div>
</template>

<script>
    import ajax from "../ajax/ajax";
    // 表示的是 钱包的
    export default {
        name: "purse",
        data(){
            return{
                money:0,
                to:0,
            }
        },
        methods:{
            add(){
                this.$prompt('请输入钱的数目', '提示', {
                    confirmButtonText: '确定充值',
                    cancelButtonText: '取消充值',
                    // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    // inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {

                    var mes=this.$message;
                    ajax.AddMoney(value,1,function (res,code) {

                        if (code === 200 && res.code === 200) {
                            mes({
                                showClose: true,
                                message: res.data.message,
                                type: 'info'
                            });
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
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消充值'
                    });
                });

            },
            tranfer(){
                this.$prompt('请输入转账的钱', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
                   this.money=value;
                   this.kk();
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            kk(){
                var mes=this.$message;
                this.$prompt('请输入转账的人', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
                    this.to=value;
                    ajax.Transfer(this.money,7,this.to,function (res,code) {
                        if (code === 200 && res.code === 200) {
                            mes({
                                showClose: true,
                                message: res.message,
                                type: 'success'
                            });
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
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            }
        }
    }
</script>

<style scoped>

    .bu{
        font-size: 25px;
        margin-top: 10%;
        height: 150px;
        width: 200px;
    }
</style>