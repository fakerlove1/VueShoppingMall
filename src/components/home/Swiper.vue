<template>
    <swiper :options="swiperOption" class="s">
        <!-- v-for="(item, index) in auditData" :key="index" -->
        <swiper-slide v-for="(item,index) in images" class="it" :key="index" >
            <el-image :src="item" />
        </swiper-slide>
<!--        -->
        <!-- 分页器就是下面的小圆点-->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- 左右箭头-->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <!-- 导航条-->
<!--        <div class="swiper-scrollbar" slot="scrollbar"></div>-->
    </swiper>
</template>

<script>
    // 引用 vue awesome 是组件
    import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        components: {
            Swiper,
            SwiperSlide
        },

        //这个是 父组件传过来的数据,使用 props

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
        data() {
            return {

                swiperOption: {
                    // 这个是导航条的
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    },
                    // 每一个页面有几张图片
                    slidesPerView: 1,
                    // 是否需要平滑的滚动
                    // freeMode: true,
                    autoplay: {
                        delay: 1500,
                        stopOnLastSlide: false,
                        disableOnInteraction: false
                    },
                    // 平滑的速度
                    speed: 800,
                    // 分页器的设置
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                        type: "bullets"
                    }
                }
            }
        },
        directives: {
            swiper: directive
        }
    }

</script>

<style scoped>
    .s{
        height: 100%;
        width: 100%;
    }
    img{
        height: 100%;
    }
    .it{
        height: 100%;
    }
</style>
