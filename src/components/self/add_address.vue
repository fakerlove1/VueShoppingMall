<template>
    <div class="all">
        <div class="amap-page-container">
            <div :style="{width:'100%',height:'300px'}">

                <!--                如果同一个页面要使用多个高德地图 vid不能相同
                plugin 为 插件
                center 表示 中间
                events 表示 事件


                -->
                <el-amap
                        vid="amap"
                        class="amap-demo"
                        :amap-manager="amapManager"
                        :plugin="plugin"
                        :events="events"
                        :center="center"
                >
                </el-amap>
            </div>
        </div>

        <el-form :model="re" label-width="80px" label-position="left" class="add">
            <el-row>
                <el-col :span="8">
                    <el-form-item label="省">
                        <el-input v-model="re.province" type="text" class="e_input"></el-input>
                    </el-form-item>

                    <el-form-item label="市">
                        <el-input v-model="re.city" class="e_input"></el-input>
                    </el-form-item>

                    <el-form-item label="县/区">
                        <el-input v-model="re.dis" class="e_input"></el-input>
                    </el-form-item>

                    <el-form-item label="具体地址">
                        <el-input v-model="re.address" type="textarea" class="e_t"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <el-form-item>
                        <el-button type="primary">添加地址</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
            >
        </el-form>
    </div>

</template>

<script>

    import VueAMap from 'vue-amap';
    // 这个是 VueAMap 的管理器 ，控制事件地址位置
    let amapManager = new VueAMap.AMapManager();

    import $ from "jquery"

    export default {
        name: "addaddress",
        data() {
            const self = this;
            return {
                re: {
                    city: "",
                    province: "",
                    dis: "",
                    address: ""
                },
                amapManager,
                center: [121.59996, 31.197646],
                lng: 0,
                lat: 0,
                loaded: false,
                events: {
                    click(e) {
                        console.log(e)
                        self.lat = e.lnglat.lat;
                        self.lng = e.lnglat.lng;
                        // 可能有人安装了语法检查器，所以这一行的语法必须控制
                        // eslint-disable-next-line no-undef
                        let geocoder = new AMap.Geocoder({
                            radius: 1000,
                            extensions: 'all'
                        })
                        geocoder.getAddress([self.lng, self.lat], function (status, result) {
                            console.log(status)
                            if (status === 'complete' && result.info === 'OK') {
                                if (result && result.regeocode) {
                                    console.log(result.regeocode)
                                    console.log(result.regeocode.formattedAddress)
                                    self.re.address = result.regeocode.formattedAddress
                                    self.re.city = result.regeocode.addressComponent.city;
                                    self.re.province = result.regeocode.addressComponent.province;
                                    self.re.dis = result.regeocode.addressComponent.district;
                                    self.$nextTick()
                                }
                            }
                        })

                    }

                },
                // 这里是 使用 高德的插件内容 必须配合 使用
                plugin: [
                    {
                        enableHighAccuracy: true,//是否使用高精度定位，默认:true
                        timeout: 100,          //超过10秒后停止定位，默认：无穷大
                        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                        showButton: true,        //显示定位按钮，默认：true
                        buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
                        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
                        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
                        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                        zoomToAccuracy: true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
                        extensions: 'all',
                        pName: 'Geolocation',
                        // 事件
                        events: {
                            //   初始化 地图
                            init(o) {
                                console.log(o)
                                // o 是高德地图定位插件实例
                                o.getCurrentPosition((status, result) => {
                                    console.log(result)
                                    if (result && result.position) {
                                        self.lng = result.position.lng;
                                        self.lat = result.position.lat;
                                        self.center = [self.lng, self.lat];
                                        self.loaded = true;
                                        self.$nextTick();
                                    }
                                });
                            },
                        }
                    },
                    // 第二个插件
                    {
                        // 搜索
                        pName: 'PlaceSearch',
                        events: {
                            init(instance) {
                                console.log(instance)
                            }
                        }
                    }
                ]
            }
        },
        methods: {},
        mounted: {
            height() {
                $(".all").height($(document).height());
                $(".add").height($(document).height() / 3);
            }
        }
    }
</script>

<style scoped>
    .e_t {
        width: 200px;
        height: 200px;
    }

    .e_input {
        width: 200px;
    }

    .all {
        height: 100%;
        width: 100%;
    }

    .add {
        margin-top: 10px;
        width: 80%;
        margin-left: 20px;
    }

    .amap-demo {
        width: 100%;
        height: 300px;
    }
</style>