<template>
    <div class="add">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">

            <el-form-item label="昵称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="请输入新密码" prop="password">
                <el-input v-model="ruleForm.password" type="password"></el-input>
            </el-form-item>

            <el-form-item label="再次确认新密码" prop="two_password">
                <el-input v-model="ruleForm.two_password" type="password"></el-input>
            </el-form-item>


            <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="ruleForm.gender">
                    <el-radio label="男" value="1"></el-radio>
                    <el-radio label="女" value="2"></el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="个性签名" prop="information">
                <el-input type="textarea" v-model="ruleForm.information"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">修改信息</el-button>
                <el-button @click="resetForm('ruleForm')">重置信息</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>




<script>
    export default {
        name:"addinformation",
        data() {
            return {
                // 表单规则
                ruleForm: {
                    name: '',
                    password: '',
                    two_password:'',
                    gender:1,
                    information:'',

                },
                rules: {
                    name: [
                        { required: true, message: '请输入昵称', trigger: 'blur' },
                        { min: 2, max: 20, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'change' }
                    ],
                    two_password: [
                        {required: true, message: '两次密码不一致', trigger: 'change' }
                    ],
                    gender: [
                        {
                            required:true,message:"请确认性别",trigger:"change"
                        }
                    ],
                    information: [{
                        required:true,message:"请输入个性签名，不能为空",trigger:"change"
                    }]
                }
            };
        },
        methods: {
            // 提交表单
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },

            // 重置变淡
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style scoped>

    .add{
        height: 100%;
        width: 55%;
        margin-left: 10%;
        margin-top: 5%;
    }

</style>