<template>
    <div>
        <el-form id="form" action="http://localhost:9090/Seller/Modify" method="POST" enctype="multipart/form-data" :model="goods"  label-width="120px" class="demo-ruleForm">
            <input type="hidden" name="goods_id" :value="goods.goods_id">
            <input type="hidden" name="seller_id" :value="goods.seller_id">
            <el-form-item label="修改商品图片" prop="file">
                <input type="file" value="上传图片" name="file">
                <el-image :src="goods.banner_img" ></el-image>
            </el-form-item>

            <el-form-item label="商品名称" prop="name">
                <el-input v-model="goods.goods_name" name="goods_name"></el-input>
            </el-form-item>

            <el-form-item label="商品数量" prop="password">
                <el-input v-model="goods.surplus" name="surplus"></el-input>
            </el-form-item>

            <el-form-item label="商品价格" prop="two_password">
                <el-input v-model="goods.sell_price" name="sell_price"></el-input>
            </el-form-item>
            <el-form-item label="商品原先价格" prop="password">
                <el-input v-model="goods.original_price" type="telephone" name="original_price"></el-input>
            </el-form-item>

            <el-form-item label="商品信息" prop="information">
                <el-input type="textarea" v-model="goods.priviewInformation" name="priviewInformation"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm()">修改商品</el-button>
                <el-button @click="resetForm('ruleForm')">重置商品信息</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import $ from "jquery";

    export default {
        name: "goods_modify",
        data(){

            return{
                goods: {
                },


            }
        },
        methods:{
            submitForm(){
                var mes=this.$message;
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
        },
        mounted() {
            console.log(this.$route.query.goods) ;
            this.goods=this.$route.query.goods;
        }
    }
</script>

<style scoped>

</style>