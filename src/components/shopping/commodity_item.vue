<template>
    <div>
        <div class="buy_item" @click="change(index)" v-for="(item,index) in tabledata" :key="index"  :class="choose==index?'kk':''">
            {{item}}
            <i  class="i"  v-if="choose==index?1:0" ></i>
        </div>
    </div>
</template>

<script>
    // import $ from "jquery"
    export default {
        name: "buy_item",
        data(){
            return{
                flag:[],
                choose:{
                    default:-1,
                },
            }
        },
        props:{
            tabledata:Array,

        },
        methods:{
            change(index){
                this.choose=index;
                // console.log( $(".i").eq(index))
               // $(".i").eq(index).css({"border":'2px solid #FF0036'})
            }
        }
    }
</script>

<style scoped>

    .i{
        height: 16px;
        width: 16px;
        position: absolute;
        right: 0;
        bottom:0;
        background-image: url(../../assets/icon/check.png);
    }

    .buy_item{
        line-height: 40px;
        position: relative;
        height: 40px;
        width: auto;
        white-space: nowrap;
        text-align: center;
        border: 2px solid #b8b7bd;
        color: #000;
        background-color: #fff;

        float: left;
        margin-right: 4px;
        margin-bottom: 5px;
        min-width: 70px;
    }
    .buy_item:hover{
        border: 2px solid #FF0036;
    }

    .kk{
        border: 2px solid #FF0036;
    }
    
</style>