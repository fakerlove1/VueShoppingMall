<template>
    <div>
<<<<<<< HEAD
        <!--        首部部分-->
        <div class="top">
            <ul>
                <li class="top_li" v-for="item in title" :key="item">
                    <span>{{item}}</span>
                </li>
            </ul>
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
                    </el-col>
                </el-row>


                <!--                下面开始电商 的第二个部分-->
                <el-row class="two">
                    <el-col :span="4" class="two_content" v-for="item in two" :key="item">
                        <!--                      <h_component :imgurl="item.imgurl" :name="item.name" :now_price="item.now_price" :before_price="item.before_price"></h_component>-->
                        <div>
                            <div class="two_top">
                                <el-image :src="item.imgurl" :fit="fill" class="two_image"></el-image>
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

            </div>
=======
<!--        首部部分-->
        <div class="top">
            <ul>
               <li class="top_li" v-for="item in title" :key="item">
                  <span>{{item}}</span>
               </li>
            </ul>
        </div>

<!--        轮播图部分-->
        <div>
            <rotation :images="parent_list"></rotation>
>>>>>>> 3cc25cd51f9ad9ae5a46fae7a7d02d930a6000f4
        </div>
    </div>
</template>

<script>
<<<<<<< HEAD

    // 这个是首页的 Vue 部分
    import Swiper from "./Swiper";


    const two_object = {
        imgurl: require("../../assets/image/2.jpg"),
        name: "阿迪达斯鞋子",
        now_price: 100,
        before_price: 200
    }

    export default {
        name: "home",
        components: {Swiper},
        data() {
            return {
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

                ]

            }
        },
        method: {}
=======
    import Rotation from "@/components/home/Rotation"

    export default {
        name: "home",
        components: {Rotation},
        data(){
            return{
                title:["学习","游戏","偶像","舞蹈","音乐","电视剧","动漫"],
                parent_list:[require("../../assets/image/1.jpg"),
                    require("../../assets/image/2.jpg"),
                    require("../../assets/image/3.jpg"),
                    require("../../assets/image/4.jpg")]
            }
        },
        method:{

        }
>>>>>>> 3cc25cd51f9ad9ae5a46fae7a7d02d930a6000f4
    }
</script>

<style scoped>
<<<<<<< HEAD


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
    .left_li{

    }
    .left_li>a:first-child{
        font-size: 18px;
        font-weight: 500;
        /*font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;*/
    }
    .left_li>a{
        text-decoration: none;
        color: #555;
        white-space: nowrap;
        margin: 0 5px  0;
        font-family: "PingFang SC","Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
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
        height: 1000px;
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
    .top {
        width: 100%;
        height: 50px;
        border: #303133 1px solid;

    }

    .top > ul {
=======
 .top{
     width: 100%;
     height: 50px;
     border: #303133 1px solid;

 }
    .top>ul{
>>>>>>> 3cc25cd51f9ad9ae5a46fae7a7d02d930a6000f4
        display: block;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        list-style: none;
        padding: 0;
        margin: auto;
        box-sizing: border-box;
    }
<<<<<<< HEAD

    .top_li > span {
=======
    .top_li>span{
>>>>>>> 3cc25cd51f9ad9ae5a46fae7a7d02d930a6000f4
        padding-top: 5px;
        display: block;
        color: #d4d4d4;
        vertical-align: middle;
        text-align: center;
        font-size: 20px;
        width: 100%;
        height: 100%;
    }
<<<<<<< HEAD

    .top_li {
=======
    .top_li{
>>>>>>> 3cc25cd51f9ad9ae5a46fae7a7d02d930a6000f4
        border: #ffffff 2px solid;
        box-sizing: border-box;
        border-radius: 25px;
        width: 8%;
        display: inline-block;
        height: 100%;
        margin-left: 5px;

        /*-webkit-box-sizing: border-box;*/

        /*-moz-box-sizing: border-box;*/
    }
<<<<<<< HEAD

    .top_li:hover {
=======
    .top_li:hover{
>>>>>>> 3cc25cd51f9ad9ae5a46fae7a7d02d930a6000f4
        border: #1ba8ed 2px solid;
        background-color: #fff;

    }
<<<<<<< HEAD

    .top_li > span:hover {
=======
    .top_li>span:hover{
>>>>>>> 3cc25cd51f9ad9ae5a46fae7a7d02d930a6000f4
        color: #1ba8ed;
    }
</style>