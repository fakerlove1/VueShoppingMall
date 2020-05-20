<template>
    <div class="information">
        <div class="top">
            <el-avatar class="touxiang" :size="100" :src="this.$store.state.user.imgurl"></el-avatar>
            <div class="content">
                <div class="name">{{this.$store.state.user.username}}</div>
                <div class="tl">
                    <span>
                        关注 0
                    </span>
                    <span>
                        收藏 9
                    </span>
                    <span>
                        动态 0
                    </span>
                    <span>
                        粉丝 2
                    </span>
                </div>
            </div>

        </div>

        <div v-for="item in person" :key="item" class="item">
            <div class="item_id">{{item.id}}: </div>
            <div class="item_name">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
    // 展示个人信息的地方

    export default {
        name: "information",
        data(){
          return{
              person: [
                  {
                      id: "昵称",
                      name: this.$store.state.user.username
                  },
                  {
                      id: "性别",
                      name: this.$store.state.user.gender=='1'?"男":"女"
                  },

              ]
          }
        },
    }
</script>

<style scoped>
    .information{
        height: 100%;
        width: 100%;
        margin-top: 20px;
    }
    .item{
        height: 48px;
        width: 40%;
    }
    .item>div{
        float: left;
    }
    .item_id{
        text-align: right;
        height: 48px;
        line-height: 48px;
        width: 30%;
        margin-right: 10px;
    }
    .item_name{
        text-align: left;
        height: 48px;
        line-height: 48px;
        width: 60%;
    }


    /*顶部 的内容*/

    .top{
        margin: auto;
        height: 100px;
        width: 90%;
        margin-bottom: 50px;
    }
    .top>div{
        float: left;
    }
    .touxiang{
        float: left;
        margin-left: 100px;
        margin-right: 30px;
    }
    .top{
        height: 100px;
        width: 100%;
    }
    .name{
        height: 50px;
        font-size: 21px;
        font-weight: 700;
        vertical-align: middle;
        text-align: left;
        line-height: 50px;
    }
    .tl{
        height: 50px;
        line-height: 50px;
    }
    .tl>span{
        margin-right: 20px;
        color: #969696;
    }
    .content{
        height: 100px;

    }
</style>