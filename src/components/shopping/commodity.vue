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

                <div class="item" v-for="(item,index) in type" :key="index">
                    <div class="title">{{item.name}}</div>
                    <div class="item_content">
                        <buy_item :tabledata="item.data"></buy_item>
                    </div>
                </div>

                <div class="item">
                    <div class="title">数量</div>
                    <div class="item_content price">
                        <el-input-number v-model="number" label="描述文字"></el-input-number>
                    </div>
                </div>

                <div class="item">
                    <el-button type="danger" round class="button_buy" @click="commodity">立即购买</el-button>
                    <el-button type="danger" round class="button_add" @click="add">加入购物车</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import buy_item from "./commodity_item";
    // 商品的页面
    export default {
        name: "buy",
        components: {buy_item},
        methods: {
            buy(){

            },
            add(){

            }
        },
        mounted() {
            console.log($(".item"))
            $(".item").each(function () {
                const h = $(this).find(".item_content").height();
                $(this).height(h);
                // if(h==undefined){
                //     $(this).height(100)
                // }
            });
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
                select: []
            }
        }
    }
</script>

<style scoped>
    .button_buy{
       margin-top: 5%;
        height: 48px;
        margin-right: 30px;
        width: 30%;
    }
    .button_add{
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