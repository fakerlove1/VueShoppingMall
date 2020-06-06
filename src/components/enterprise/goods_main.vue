<template>
    <div>
        <el-row class="kk">

            <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">账单页面</el-menu-item>
                <el-menu-item index="2">商品页面</el-menu-item>
                <el-menu-item index="3">添加商品</el-menu-item>
            </el-menu>
        </el-row>
        <transition name="price-fade">
            <div v-if="activeIndex==1">
                <el-table
                        :data="bill.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="person.user_name"
                            label="买家"
                            width="180">
                    </el-table-column>

                    <el-table-column
                            prop="order.order_time"
                            label="购买时间"
                            width="180">
                    </el-table-column>

                    <el-table-column
                            prop="buy_number"
                            label="数量">
                    </el-table-column>
                    <el-table-column
                            prop="item_money"
                            label="总价">
                    </el-table-column>

                    <el-table-column
                            prop="person.user_gender"
                            label="性别">
                    </el-table-column>
                    <el-table-column
                            prop="person.user_telephone"
                            label="买家电话">
                    </el-table-column>
                </el-table>


                <div class="button">
                    <el-pagination
                            background
                            :page-size="pagesize"
                            :current-page="currentPage"
                            @current-change="handleCurrentChange"
                            @prev-click="prev_click"
                            @next-click="next_click"
                            layout="prev, pager, next"
                            :total="total">
                    </el-pagination>
                </div>
            </div>

            <div v-else-if="activeIndex==2">
                <el-table
                        :data="goods"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="goods_name"
                            label="商品名称"
                            width="180">
                    </el-table-column>

                    <el-table-column
                            label="商品图片">
                        <template slot-scope="scope">
                            <el-image :src="scope.row.banner_img" style="height: 100px; width: 100px"></el-image>
                        </template>
                    </el-table-column>

                    <el-table-column
                            prop="sell_price"
                            label="商品价格">
                    </el-table-column>
                    <el-table-column
                            prop="surplus"
                            label="商品剩余数量">
                    </el-table-column>

                    <el-table-column
                            prop="sale"
                            label="商品已卖">
                    </el-table-column>
                    <el-table-column
                            prop="original_price"
                            label="商品原来价格">
                    </el-table-column>

                    <el-table-column
                            label="操作">
                        <template slot-scope="scope">
                            <el-button @click="modify(scope.row)" type="primary">修改商品</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div v-else>
                <el-form id="form" action="http://localhost:81/Seller/Add" method="POST" enctype="multipart/form-data"
                         :model="upload" label-width="120px" class="demo-ruleForm">
                    <input type="hidden" name="seller_id" value="1">
                    <el-form-item label="商品图片" prop="file">
                        <input type="file" value="上传图片" name="file">
                        <el-image :src="upload.banner_img"></el-image>
                    </el-form-item>

                    <el-form-item label="商品名称" prop="name">
                        <el-input v-model="upload.goods_name" name="goods_name"></el-input>
                    </el-form-item>

                    <el-form-item label="商品数量" prop="password">
                        <el-input v-model="upload.surplus" name="surplus"></el-input>
                    </el-form-item>

                    <el-form-item label="商品价格" prop="two_password">
                        <el-input v-model="upload.sell_price" name="sell_price"></el-input>
                    </el-form-item>

                    <el-form-item label="商品信息" prop="information">
                        <el-input type="textarea" v-model="upload.priviewInformation"
                                  name="priviewInformation"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm()">添加商品信息</el-button>
                        <el-button type="primary">重置商品信息</el-button>
                    </el-form-item>
                </el-form>
            </div>

        </transition>
    </div>
</template>

<script>
    import ajax from "../ajax/ajax";
    import utils from "../ajax/utils";
    import $ from "jquery";

    export default {
        name: "goods_main",
        data() {
            return {
                bill: [],
                total: 10,
                currentPage: 1,
                pagesize: 5,
                activeIndex: 1,
                goods: [],
                upload: {
                    banner_img: "",
                    goods_name: "",
                    surplus: 0,
                    sell_pric: 0,
                    priviewInformation: ""
                }
            }
        },
        methods: {
            // 这里是添加商品
            submitForm() {
                var mes = this.$message
                // 提交表单
                // jquery 表单提交
                $("#form").ajaxSubmit(function (result) {
                    // 对于表单提交成功后处理，result为表单正常提交后返回的内容
                    if (result.code === 200) {
                        mes({
                            type: "success",
                            showClose: true,
                            message: "添加物品成功",
                        })
                    } else {
                        mes({
                            type: "error",
                            showClose: true,
                            message: "添加物品失败",
                        })
                    }
                });
                return false; // 必须返回false，否则表单会自己再做一次提交操作，并且页面跳转
            },
            prev_click(res) {
                this.currentPage = res;
            },
            next_click(res) {
                this.currentPage = res;
            },
            handleCurrentChange(val) {
                this.currentPage = val;
            },
            handleSelect(value) {
                this.activeIndex = value;
            },
            modify(value) {
                this.$router.push(
                    {
                        path: "/enterprise/modify",
                        query: {
                            goods: value
                        }
                    })
            },

        },
        mounted() {
            var th = this;
            var mes = this.$message;

            let user_id=0;
            if(this.$store.state.user.userid===0){
                user_id=1;
                this.$message({
                    showClose: true,
                    message: '请先登录',
                    type: 'error'
                })
            }else{
                user_id=this.$store.state.user.userid;
            }

            ajax.Seller.Shopping(user_id, function (res, code) {
                if (code == 200 && res.code == 200) {
                    th.bill = res.data.order;
                    for (var item in th.bill) {
                        th.bill[item]["order"]["order_time"] = utils.getFormateDateByLong(th.bill[item]["order"]["order_time"]);
                        if (th.bill[item]["person"]["user_gender"] === 0) {
                            th.bill[item]["person"]["user_gender"] = "男性买家";
                        } else {
                            th.bill[item]["person"]["user_gender"] = "女性买家";
                        }
                    }
                } else {
                    if (code == 400) {
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

            ajax.Seller.Goods(1, function (res, code) {
                if (code == 200 && res.code == 200) {
                    th.goods = res.data.Goods;
                    mes({
                        showClose: true,
                        message: '加载成功',
                        type: 'success'
                    });
                } else {

                    if (code == 400) {
                        // 没有数据
                        th.have = false;
                        mes({
                            showClose: true,
                            message: '对不起，购买失败，请检查网络',
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
</script>

<style scoped>
    .price-fade-enter-active, .price-fade-active {
        transition: opacity;
    }

    .price-fade-enter, .price-fade-leave-to {
        opacity: 0;
    }
</style>