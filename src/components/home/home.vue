<template>
    <div>
        <!--        首部部分 导航条-->
        <div class="top">
            <el-row :gutter="20">
                <el-col :span="13" :offset="3">
                    <ul class="top_ul">
                        <li class="top_li" v-for="item in title" :key="item">
                            <span>{{item}}</span>
                        </li>
                    </ul>
                </el-col>

                <el-col :span="3" :offset="2">
                  <login :flag="this.$store.state.user.status" :login_image="this.$store.state.user.imgurl"></login>
                </el-col>
            </el-row>


        </div>


        <!--        主页中间部分-->
        <div class="middle">
            <div class="middle_content">
                <!--                这个是 文章的第一个部分-->
                <el-row class="content_first">
                    <el-col class="first_left" :span="3">
                        <ul class="left_ul">
                            <li v-for="item in ti" :key="item" class="left_li">
                                <a :href="item.url">{{item.title}}</a>
                                <a v-for="temp in item.branch" :href="temp.url" :key="temp">
                                    {{temp.title}}
                                </a>
                            </li>
                        </ul>
                    </el-col>
                    <el-col class="first_right" :span="9">
                        <!--        轮播图部分-->
                        <swiper :images="parent_list"></swiper>
<!--                        <el-carousel  class="sw">-->
<!--                            <el-carousel-item v-for="item in parent_list" :key="item">-->
<!--                               <img :src="item" class="sw_image" >-->
<!--                            </el-carousel-item>-->
<!--                        </el-carousel>-->
                    </el-col>
                </el-row>


                <!--                下面开始电商 的第二个部分-->
                <el-row class="two">
                    <el-col :span="4" class="two_content" v-for="item in two" :key="item">
                        <!--                      <h_component :imgurl="item.imgurl" :name="item.name" :now_price="item.now_price" :before_price="item.before_price"></h_component>-->
                        <div>
                            <div class="two_top">
                                <!--                                <el-tooltip class="item" effect="dark" :content="item.name" placement="right-start">-->
                                <el-image :src="item.imgurl" :fit="fill" class="two_image"
                                          :title="item.name"></el-image>
                                <!--                                </el-tooltip>-->
                            </div>
                            <div class="two_middle">
                                <div>{{item.name}}</div>
                            </div>
                            <div class="two_buttom">
                                <div class="two_now">￥{{item.now_price}}</div>
                                <div class="two_before">￥{{item.before_price}}</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>


                <!--                主页的第三部分-->
                <el-row class="three">

                    <!--                    两个排行榜-->
                    <el-col :span="6">
                        <div>
                            <div class="three_title">
                                <h1>热销排行榜</h1>
                            </div>
                            <div class="three_content">
                                <div v-for="item in rank_first" :key="item" class="three_content_item">
                                    <div>
                                        <el-tag type="danger" class="three_content_id"> {{item.id}}</el-tag>
                                    </div>
                                    <div>
                                        <el-image class="three_content_image" :src="item.imgurl" :fit="fill"></el-image>
                                    </div>
                                    <div class="three_content_name">
                                        {{item.name}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>

                    <!--                    排行榜-->
                    <el-col :span="6">
                        <div>
                            <div class="three_title">
                                <h1>热销排行榜</h1>
                            </div>
                            <div class="three_content">
                                <div v-for="item in rank_two" :key="item" class="three_content_item">
                                    <div>
                                        <el-tag type="danger" class="three_content_id"> {{item.id}}</el-tag>
                                    </div>
                                    <div>
                                        <el-image class="three_content_image" :src="item.imgurl" :fit="fill"></el-image>
                                    </div>
                                    <div class="three_content_name">
                                        {{item.name}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>

                    <!--                    展示商品-->

                    <el-col :span="12" >
                        <home_item v-for="item in reduce" class="home_item" :key="item" :images="item.imgurl" :name="item.name" :price="item.price">

                        </home_item>
                    </el-col>
                </el-row>

            </div>
        </div>
    </div>
</template>

<script>


    // 这个是 轮播图的部分
    import Swiper from "./Swiper";
    import home_item from "./home_item";
    import login from "./home_login";

    const two_object = {
        imgurl: require("../../assets/image/2.jpg"),
        name: "阿迪达斯鞋子",
        now_price: 100,
        before_price: 200
    }

    export default {
        name: "home",
        components: {home_item,Swiper,login},
        data() {
            return {
                // 表示是否登录
                login:true,
                login_image: require("../../assets/image/4.jpg"),
                title: ["学习", "游戏", "偶像", "舞蹈", "音乐", "电视剧", "动漫"],
                parent_list: [require("../../assets/image/1.jpg"),
                    require("../../assets/image/2.jpg"),
                    require("../../assets/image/3.jpg"),
                    require("../../assets/image/4.jpg")]
                ,
                two: [two_object, two_object, two_object, two_object, two_object],

                // 这个属性是 分类栏
                ti: [
                    {
                        title: "家用电器",
                        url: "https://www.baidu.com",
                        branch: [{
                            title: "空调",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电灯泡",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电视机",
                            url: "https://www.baidu.com"
                        }
                        ]
                    },
                    {
                        title: "家用电器",
                        url: "https://www.baidu.com",
                        branch: [{
                            title: "空调",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电灯泡",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电视机",
                            url: "https://www.baidu.com"
                        }
                        ]
                    },
                    {
                        title: "家用电器",
                        url: "https://www.baidu.com",
                        branch: [{
                            title: "空调",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电灯泡",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电视机",
                            url: "https://www.baidu.com"
                        }
                        ]
                    },
                    {
                        title: "家用电器",
                        url: "https://www.baidu.com",
                        branch: [{
                            title: "空调",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电灯泡",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电视机",
                            url: "https://www.baidu.com"
                        }
                        ]
                    },
                    {
                        title: "家用电器",
                        url: "https://www.baidu.com",
                        branch: [{
                            title: "空调",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电灯泡",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电视机",
                            url: "https://www.baidu.com"
                        }
                        ]
                    },
                    {
                        title: "家用电器",
                        url: "https://www.baidu.com",
                        branch: [{
                            title: "空调",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电灯泡",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电视机",
                            url: "https://www.baidu.com"
                        }
                        ]
                    },
                    {
                        title: "家用电器",
                        url: "https://www.baidu.com",
                        branch: [{
                            title: "空调",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电灯泡",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电视机",
                            url: "https://www.baidu.com"
                        }
                        ]
                    },
                    {
                        title: "家用电器",
                        url: "https://www.baidu.com",
                        branch: [{
                            title: "空调",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电灯泡",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电视机",
                            url: "https://www.baidu.com"
                        }
                        ]
                    },
                    {
                        title: "家用电器",
                        url: "https://www.baidu.com",
                        branch: [{
                            title: "空调",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电灯泡",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电视机",
                            url: "https://www.baidu.com"
                        }
                        ]
                    },
                    {
                        title: "家用电器",
                        url: "https://www.baidu.com",
                        branch: [{
                            title: "空调",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电灯泡",
                            url: "https://www.baidu.com"
                        }, {
                            title: "电视机",
                            url: "https://www.baidu.com"
                        }
                        ]
                    }

                ],
                //排行榜的信息
                rank_first: [
                    {
                        id: 1,
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息"
                    },
                    {
                        id: 2,
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息"
                    },
                    {
                        id: 3,
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息"
                    },
                    {
                        id: 4,
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息"
                    },
                    {
                        id: 1,
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息"
                    },
                    {
                        id: 2,
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息"
                    },
                    {
                        id: 3,
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息"
                    },
                    {
                        id: 4,
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息"
                    },
                ],
                rank_two: [
                    {
                        id: 1,
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息"
                    },
                    {
                        id: 2,
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息"
                    },
                    {
                        id: 3,
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息"
                    },
                    {
                        id: 4,
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息"
                    },
                    {
                        id: 1,
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息"
                    },
                    {
                        id: 2,
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息"
                    },
                    {
                        id: 3,
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息"
                    },
                    {
                        id: 4,
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息"
                    },
                ],

                // 爆降商品
                reduce: [
                    {
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old schqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqool学校的信息",
                        price: "79"
                    }, {
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息",
                        price: "810"
                    },
                    {
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息",
                        price: "803"
                    },
                    {
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息",
                        price: "80"
                    },
                    {
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old schoowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwl学校的信息",
                        price: "80"
                    },
                    {
                        imgurl: require("../../assets/image/2.jpg"),
                        name: "vans old school学校的信息",
                        price: "80"
                    },
                ]
            }
        },
    }
</script>

<style scoped>



    .home_item{
        float: left;
        width: 30%;
        height: 320px;
        margin:10px;
    }
    /*中间的第二个部分*/

    .two_middle {
        margin: 5px;
        font-size: 16px;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: color .2s ease;
    }

    .two {
        margin-top: 30px;
        height: 200px;
        width: 100%;
        background-color: #fff;
    }

    .two_content {
        height: 100%;
        margin: 0 10px;
    }

    .two_buttom {
        border: 1px solid #e1251b;
    }

    .two_buttom > div {
        display: inline-block;
        height: 20%;
        width: 50%;
    }

    .two_now {
        background-color: #e1251b;
        color: #fff;
        font-weight: 700;
        text-align: center;
        font-size: 16px;
    }

    .two_before {
        font-size: 16px;
        text-decoration: #999;
        text-align: center;
        text-decoration: line-through;
    }

    .two_top {
        height: 100%;
        width: 100%;
    }

    .two_image {
        height: 100%;
        width: 100%;
    }

    /*中间的第一个部分*/
    .left_li {

    }

    .left_li > a:first-child {
        font-size: 18px;
        font-weight: 500;
        /*font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;*/
    }

    .left_li > a {
        text-decoration: none;
        color: #555;
        white-space: nowrap;
        margin: 0 5px 0;
        font-family: "PingFang SC", "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    .content_first {
        height: 400px;
        background-color: #fff;
    }

    .left_ul {
        width: 100%;
        padding: 0;
        height: 100%;
    }

    .left_ul > li {
        margin-left: 10px;
        height: 10%;
        text-align: left;
        width: 100%;
    }

    .first_left {
        height: 100%;
        width: 25%;
    }

    .first_left > ul {
        list-style: none;
    }

    /*这个是 middle 的所有属性 */

    .middle {
        margin-top: 10px;
        width: 100%;
        height: 2000px;
    }

    /*最中央的部分*/
    .middle_content {
        height: 100%;
        display: block;
        width: 80%;
        margin: auto;
        border: 1px solid red;

    }

    .middle_content > div {
        display: flex;
    }


    /*轮播图的地方 */
    .first_right {
        width: 75%;
        height: 100%;
    }

    /*下面的 div --top 的所有属性*/
    /*设置背景颜色*/
    .top {
        width: 100%;
        height: 52px;
        background-color: #444444;
    }
    /*展示成块状元素*/
    .top_ul {
        width: 100%;
        height: 52px;
        list-style: none;
        padding: 0;
        margin: auto;
        box-sizing: border-box;
    }

    /*这个是导航条的样式*/
    .top_li > span {
        line-height: 48px;
        display: block;
        color: #d4d4d4;
        vertical-align: middle;
        text-align: center;
        font-size: 20px;
        width: 100%;
        height: 48px;
    }

    /* top 中的 li 样式*/
    .top_li {
        border: #ffffff 2px solid;
        box-sizing: border-box;
        border-radius: 25px;
        width: 12%;
        float: left;
        height: 48px;
        margin-left: 12px;

    }


    .top_li:hover {

        border: #1ba8ed 2px solid;
        background-color: #fff;

    }

    .top_li > span:hover {
        color: #1ba8ed;
    }

    /*    中间的第三个部分*/
    .three_content {
        height: 400px;
        width: 100%;
    }

    .three_content > div {
        height: 100px;
        margin-bottom: 5px;
    }

    .three_content_item > div {
        float: left;
        margin-left: 5px;
        width: 30%;
        height: 100%;
    }

    .three_content_image {
        height: 100%;
        width: 100%;
        text-align: center;
    }

    .three_content_name {
        color: #333;
        overflow: hidden;
        font-family: Microsoft Yahei, PingFangSC-Medium, sans-serif, serif;
        font-size: 14px;
        text-align: center;
        white-space: nowrap;
        line-height: 100px;
    }

    .three_content_id {
        margin-top: 30%;
    }


</style>