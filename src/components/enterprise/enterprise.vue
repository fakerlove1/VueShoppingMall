<template>
    <div>

        <div class="content">
            <el-row class="kk">
                <router-view></router-view>
            </el-row>
        </div>
    </div>
</template>

<script>

    // 商家 的页面，
    export default {
        name: "enterprise",
        data(){
            return{

            }
        },
        methods:{


        },

    }
</script>

<style scoped>
    .content{
        width: 70%;
        margin: auto;
        height: 100%;
    }
    .kk{
        margin-bottom: 20px;
    }

</style>