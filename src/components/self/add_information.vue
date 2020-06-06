<template>
    <div class="add">
        <el-form id="form" action="http://localhost:81/Person/Modify" method="POST" enctype="multipart/form-data" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <input type="hidden" name="user_id" value="">
            <el-form-item label="修改头像" prop="file">
                <input type="file" value="上传头像" name="file">
                <el-image class="touxiang" ></el-image>
            </el-form-item>

            <el-form-item label="昵称" prop="name">
                <el-input v-model="ruleForm.user_name" name="user_name"></el-input>
            </el-form-item>

            <el-form-item label="请输入新密码" prop="password">
                <el-input v-model="ruleForm.user_password" type="password" name="user_password"></el-input>
            </el-form-item>

            <el-form-item label="再次确认新密码" prop="two_password">
                <el-input v-model="ruleForm.two_password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="电话号码" prop="password">
                <el-input v-model="ruleForm.user_telephone" type="telephone" name="user_telephone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="password">
                <el-input v-model="ruleForm.user_email" type="email" name="user_email"></el-input>
            </el-form-item>

            <el-form-item label="性别" prop="gender">
                <el-radio-group  v-model="ruleForm.user_gender">
                    <el-radio label="1" value="1" name="user_gender">男</el-radio>
                    <el-radio label="2" value="2" nam="user_gender">女</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="个性签名" prop="information">
                <el-input type="textarea" v-model="ruleForm.user_introduce" name="user_introduce"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm()">修改信息</el-button>
                <el-button @click="resetForm('ruleForm')">重置信息</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>




<script>
    import $ from "jquery"
    export default {
        name:"addinformation",
        data() {
            return {
                // 表单规则
                ruleForm: {
                    user_id:0,
                    user_name: '',
                    user_password: '',
                    two_password:'',
                    user_gender:"1",
                    user_introduce:'',
                    user_telephone:"",
                    user_email:"",
                    user_banner_img:"",
                },
                rules: {
                    user_name: [
                        {  message: '请输入昵称', trigger: 'blur' },
                        { min: 2, max: 20, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    user_password: [
                        { message: '请输入密码', trigger: 'change' }
                    ],
                    two_password: [
                        { message: '两次密码不一致', trigger: 'change' }
                    ],
                    user_gender: [
                        {
                            message:"请确认性别",trigger:"change"
                        }
                    ],
                    user_introduce: [{
                       message:"请输入个性签名，不能为空",trigger:"change"
                    }]
                }
            };
        },
        methods: {

            // 提交表单
            submitForm() {

                let mes=this.$message
                // 提交表单
                // jquery 表单提交
                $("#form").ajaxSubmit(function(result) {
                    // 对于表单提交成功后处理，result为表单正常提交后返回的内容
                    if (result.code === 200) {
                       mes({
                           type:"success",
                           showClose:true,
                           message:"修改成功",
                       })
                    }else{
                        mes({
                            type:"error",
                            showClose:true,
                            message:"修改失败",
                        })
                    }
                });
                return false; // 必须返回false，否则表单会自己再做一次提交操作，并且页面跳转
            },

            // 重置变淡
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        mounted() {
            if(this.$store.state.user.status===false){
                this.ruleForm.user_id=this.$store.state.user.userid;
            }else {
                this.ruleForm.user_id=7;
                this.$message({
                    showClose:true,
                    message:"请先登录",
                    type:"error"
                })
            }

        }
    }
</script>
<style scoped>

    .add{
        height: auto;
        width: 55%;
        margin-left: 10%;
        margin-top: 5%;
    }
    .touxiang{
        height: 100px;
        width: 100px;
    }

</style>