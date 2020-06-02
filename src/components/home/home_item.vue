<template>
    <div class="item" @click.prevent="jump(goods_id)" >
        <div class="d_image">
            <el-image :src="images" class="image"></el-image>
        </div>
        <div class="d_content">
            {{name}}
        </div>
        <div @mouseover="tag='find'" @mouseout="tag='price'" class="d_p" >
            <transition name="price-fade" mode="out-in" :duration="200" >
                <component :is="tag">
                    ${{price}}
                </component>
            </transition>
        </div>

    </div>

</template>

<script>
    // 这个是  首页home 中 商品组件
    import price from "./cart_price";
    import find from "./cart_find";
    export default {
        name: "home_item",
        data(){
          return{
              tag:"price"
            }
        },
        components:{
         price,find
        },
        props:{
            images:String,
            name:String,
            price:Number,
            goods_id:Number,

        },
        template:{

        },
        methods:{
            jump(goods_id){
                this.$router.push("/commodity/"+goods_id)
            }
        }
    }
</script>

<style scoped>

    .d_p{
        cursor: pointer;
        width: 100%;
        height: 80px;
    }
    .price-fade-enter-active, .price-fade-active {
        transition: opacity ;
    }
    .price-fade-enter, .price-fade-leave-to  {
        opacity: 0;
    }
    .item{
        height: 300px;
        width: 100%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
    .image{
        height: 150px;
        width: 100%;
    }
    .d_image{
        height: 150px;
        width: 100%;
        margin-bottom: 10px;
    }

    .d_content{
        width: 100%;
        height: 60px;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 60px;
        font-size: 14px;
        margin-bottom: 10px;
    }

</style>