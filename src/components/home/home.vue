<template>
    <div>
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
        </div>
    </div>
</template>

<script>
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
    }
</script>

<style scoped>
 .top{
     width: 100%;
     height: 50px;
     border: #303133 1px solid;

 }
    .top>ul{
        display: block;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        list-style: none;
        padding: 0;
        margin: auto;
        box-sizing: border-box;
    }
    .top_li>span{
        padding-top: 5px;
        display: block;
        color: #d4d4d4;
        vertical-align: middle;
        text-align: center;
        font-size: 20px;
        width: 100%;
        height: 100%;
    }
    .top_li{
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
    .top_li:hover{
        border: #1ba8ed 2px solid;
        background-color: #fff;

    }
    .top_li>span:hover{
        color: #1ba8ed;
    }
</style>