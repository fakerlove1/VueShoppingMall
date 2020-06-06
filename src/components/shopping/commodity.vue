<template>
    <div class="buy">
        <!--        -->
        <div class="content">

            <div class="left">
                <el-image :src="shopping.imgurl" class="image"></el-image>
                <div>
                    <el-rate
                            v-model="shopping.star"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                    </el-rate>
                </div>
            </div>

            <div class="right">
                <div class="name">
                    {{shopping.name}}
                </div>
                <div class="item">
                    <div class="title">价格</div>
                    <div class="item_content price"> ${{shopping.price}}</div>
                </div>

                <!--                这里是 选择 的标签-->
                <div class="item" v-for="(item,index) in type" :key="index">
                    <div class="title">{{item.name}}</div>
                    <div class="item_content">
                        <commodity_item :tabledata="item.data"></commodity_item>
                    </div>
                </div>

                <div class="item">
                    <div class="title">数量</div>
                    <div class="item_content price">
                        <el-input-number v-model="number" label="描述文字"></el-input-number>
                    </div>
                </div>

                <div class="item">
                    <el-button type="danger" round class="button_buy" @click="buy">立即购买</el-button>
                    <el-button type="danger" round class="button_add" @click="add">加入购物车</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import commodity_item from "./commodity_item";
    import ajax from "../ajax/ajax";
    import {Loading} from 'element-ui';

    // 展示商品的页面
    export default {
        name: "buy",
        components: {commodity_item},
        methods: {
            // 购买需要跑到添加页面
            buy() {
                var goods={
                    id:this.shopping.goods_id,
                    name:this.shopping.name,
                    number: this.number,
                    price:this.shopping.price*this.number
                }
                this.$router.push(
                    {
                        path: "/buy",
                        query: {
                            TableData:[goods]
                        }
                    })
            },
            // 添加购物车
            add() {
                // 表示没有登录
                if (this.$store.state.user.status == false) {
                    this.$alert('请先登录', '错误提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                            console.log(action);
                            this.$router.push("/login");
                        }
                    });
                } else {
                    const mes = this.$message;
                    if (this.isadd == false) {
                        // this.isadd=true;
                        // 清空数组
                        ajax.ShoppingCarAdd(this.shopping.goods_id, this.$store.state.user.userid, this.number,
                            function (res, code) {
                                if (code == 200 && res.code == 200) {
                                    mes({
                                        showClose: true,
                                        message: res.message,
                                        type: 'success'
                                    });
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
                            })
                    } else {
                        mes({
                            showClose: true,
                            message: "对不起你已经添加过了",
                            type: 'error'
                        });
                    }

                }

            }
        },
        mounted() {
            let loadingInstance = Loading.service(this.load);
            // 设置长度
            $(".item").each(function () {
                const h = $(this).find(".item_content").height();
                $(this).height(h);
            });

            // 上网寻找信息
            this.shopping.goods_id = this.$route.params.goods_id;
            const th = this;
            const mes = this.$message;
            ajax.Goods(this.shopping.goods_id, function (res, code) {
                loadingInstance.close();
                if (code == 200) {
                    const data = res.data.GoodsPerson;
                    console.log(data)
                    th.shopping.imgurl = data.banner_img;
                    th.shopping.last = data.surplus;
                    th.shopping.name = data.goods_name;
                    th.shopping.price = data.sell_price;
                } else {
                    mes({
                        showClose: true,
                        message: '对不起，商品信息有误',
                        type: 'error'
                    });
                }
            })
        },
        data() {
            return {
                shopping: {
                    imgurl: require("../../assets/image/4.jpg"),
                    name: "vans 鞋子",
                    last: 10000,
                    price: 100,
                    good: 21,
                    star: 3.5,
                    goods_id: 1,
                },
                number: 1,
                type: [
                    {
                        id: "1",
                        name: "颜色",
                        data: ["red", "blue", "white"],
                        flag: "",
                    },
                    {
                        id: "2",
                        name: "尺寸",
                        data: ["12", "213", "231", "2131", "42"],
                        flag: "",
                    }
                ],
                select: [],
                load: {fullscreen: true},
                isadd: false,
            }
        }
    }
</script>

<style scoped>
    .button_buy {
        margin-top: 5%;
        height: 48px;
        margin-right: 30px;
        width: 30%;
    }

    .button_add {
        margin-top: 5%;
        height: 48px;
        width: 30%;
    }

    .name {
        color: #333333;
        font-size: 24px;

    }

    .price {
        color: #FF0036;
        font-size: 24px;
        font-weight: bolder;
    }

    .item {
        width: 100%;
        min-height: 50px;
        margin-bottom: 10px;
    }

    .item > div {
        float: left;
    }

    .title {
        width: 20%;
        line-height: 48px;
        color: #999;
        font-size: 12px;
        text-align: left;
        height: 48px;

    }

    .item_content {
        text-align: left;
        line-height: 48px;
        width: 75%;
        height: auto;

    }

    .right {
        width: 50%;
        height: 550px;
        margin-left: 20px;
    }

    .content > div {
        float: left;
    }

    .left {
        width: 40%;
        height: 550px;
    }

    .image {
        height: 400px;
        width: 100%;
        margin-bottom: 20px;
    }

    .buy {
        width: 100%;
        height: 100%;

    }

    .content {
        height: 550px;
        width: 60%;
        margin: auto;
        margin-top: 10%;
    }
</style>