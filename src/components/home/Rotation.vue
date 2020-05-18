<template>
    <div class="all">
        <div class="swipper">
            <div v-for="item in images" class="it" :key="item">
                <img :src="item" class="img">
            </div>
        </div>

    </div>

</template>

<script>
    import $ from "jquery"
    export default {
        name: "Rotation",
        data() {

        },
        props: {
            images: {
                type: Array,
                default() {
                    return [require("../../assets/image/1.jpg"),
                        require("../../assets/image/2.jpg"),
                        require("../../assets/image/3.jpg"),
                        require("../../assets/image/4.jpg")]
                }
            }
        },
        methods:{
            change(){

            }
        }

    }
</script>

<style scoped>
    .all {
        overflow: hidden;
        height: 250px;
        width: 100%;
    }

    .swipper {
        width: 400%;
        height: 250px;
        display: flex;
    }

    .it {
        width: 100%;
        height: 250px;
        flex: 1;
    }

    .img {
        width: 100%;
        height: 250px;

    }
</style>