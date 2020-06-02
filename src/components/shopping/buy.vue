<template>
    <div>
        <div class="content">
            <el-steps :active="active" align-center finish-status="success">
                <el-step title="步骤1" description="确定订单"></el-step>
                <el-step title="步骤2" description="填写地址"></el-step>
                <el-step title="步骤3" description="付款"></el-step>
                <el-step title="步骤4" description="完成订单"></el-step>
            </el-steps>

            <el-divider></el-divider>

            <transition name="price-fade" :duration="200">
                <div>


                    <el-row v-if="active==0">
                        <el-table
                                :data="tabledata"
                                border
                                style="width: 100%">

                            <el-table-column
                                    prop="name"
                                    label="名称"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="number"
                                    label="数量"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="price"
                                    label="价格">
                            </el-table-column>
                        </el-table>

                    </el-row>

                    <div class="address" v-if="active==1">
                        <el-form  label-position="left" label-width="80px">
                            <el-form-item label="电话">
                                <el-input placeholder="电话" v-model="telephone"></el-input>
                            </el-form-item>

                            <el-form-item label="省">
                                <el-select v-model="m_provice" placeholder="省" value-key=id @change="c_provice">
                                    <el-option
                                            v-for="(item,index) in provice"
                                            :key="index"
                                            :label="item.label"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="市">
                                <el-select v-model="m_city" placeholder="市" @change="c_city()">
                                    <el-option
                                            v-for="item in city"
                                            :key="item.id"
                                            :label="item.label"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="县">
                                <el-select v-model="m_county" placeholder="县">
                                    <el-option
                                            v-for="item in county"
                                            :key="item.id"
                                            :label="item.label"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="详细地址">
                                <el-input placeholder="详细内容" v-model="detail" type="text"></el-input>
                            </el-form-item>
                        </el-form>

                    </div>

                    <el-row v-if="active==2">
                        <div>
                            开始付款
                        </div>
                    </el-row>
                    <el-row v-if="active==3">
                        <div>
                            即将跳转到首页
                        </div>
                    </el-row>

                </div>

            </transition>

            <el-divider></el-divider>

            <el-row>
                <el-col :span="4">
                    <el-button type="primary" @click="next">确定</el-button>
                </el-col>
            </el-row>

        </div>


    </div>
</template>

<script>

    import DISTRICTS from "../ajax/mycity";
    import ajax from "../ajax/ajax";

    function update(d) {
        var temp;

        // 获取所有的省
        var provice = DISTRICTS["100000"];
        d.m_provice = "110000";

        d.provice = [];
        for (var item in provice) {
            var o = new Object();
            o.id = item;
            o.label = DISTRICTS["100000"][item];
            d.provice.push(o);
        }

        d.city = [];
        temp = 110000;
        d.m_city = "110100";
        var city = DISTRICTS[temp];
        for (item in city) {
            o = new Object();
            o.id = item;
            o.label = DISTRICTS[temp][item];
            d.city.push(o)
        }

        temp = 110100;
        d.m_county = "110101";

        d.county = [];
        var county = DISTRICTS[temp];

        for (item in county) {
            o = new Object();
            o.id = item;
            o.label = DISTRICTS[temp][item];
            d.county.push(o)
        }
    }

    // 购买页面
    export default {
        name: "Buy",
        mounted() {
            console.log(typeof (this.$route.query.TableData))
            if (typeof (this.$route.query.TableData) == "string") {
                this.$message({
                    type: "error",
                    showClose: true,
                    message: "对不起数据为空",
                })
            } else {
                this.tabledata = this.$route.query.TableData;
            }
            update(this);

        },
        data() {
            return {
                tabledata: [{
                    id: 1,
                    number: 1,
                    name: "null",
                    price: 0,
                }],
                active: 0,
                provice: [],
                city: [],
                county: [],
                detail: "",
                telephone: "",
                m_provice: "",
                m_city: "",
                m_county: "",
            }
        },
        methods: {
            next() {
                if(this.active>=3){
                    this.active=0;
                }
                // 点击第三个付款时,准备没东西
               if(this.active==2){
                   this.active++;
                   var  buyGoods=[];
                   for(var i=0;i<this.tabledata.length;i++){
                       var item=this.tabledata[i];
                       console.log(item)
                       var ob=new Object();
                       ob.goods_id=item.id;
                       ob.buy_number=item.number;
                       buyGoods.push(ob);
                   }
                   var user_id=1;
                   console.log(JSON.stringify({
                       buyGoods:buyGoods,
                       user_id:user_id
                   }))
                   const mes=this.$message;
                   // 清空数组
                   const th=this;


                   ajax.BuyGoods(buyGoods,user_id,function (res,code) {
                       if(code==200&&res.code==200){
                           th.active=4;
                           mes({
                               showClose: true,
                               message: "购买成功",
                               type: 'success'
                           });

                           setTimeout(function () {
                               th.$router.push("/");
                           },1)
                       }else{
                           if(code==400){
                               mes({
                                   showClose: true,
                                   message: '对不起，购买失败，请检查网络',
                                   type: 'error'
                               });
                           }else{
                               mes({
                                   showClose: true,
                                   message: res.message,
                                   type: 'error'
                               });
                           }
                       }

                   })
               }else{
                   this.active++;
               }
            },
            // 选择的省的id,

            c_provice() {

                var temp = this.m_provice;
                var city = DISTRICTS[temp];
                console.log(city)
                this.city = [];

                for (var item in city) {
                    var o = new Object();
                    o.id = item;
                    o.label = DISTRICTS[temp][item];
                    this.city.push(o)
                }
                temp = o.id;
                this.m_city = temp;
                this.county = [];
                var county = DISTRICTS[temp]
                for (item in county) {
                    o = new Object();
                    o.id = item;
                    o.label = DISTRICTS[temp][item];
                    this.county.push(o)
                }
                temp = o.id;
                this.m_county = temp;
                console.log(this.county);
            },

            c_city() {
                var temp = this.m_city;
                this.m_city = temp;
                this.county = [];
                var county = DISTRICTS[temp];
                for (var item in county) {
                    var o = new Object();
                    o.id = item;
                    o.label = DISTRICTS[temp][item];
                    this.county.push(o)
                }
                temp = o.id;
                this.m_county = temp;
                console.log(this.county);
            }
        }
    }
</script>

<style scoped>

    .price-fade-enter-active, .price-fade-active {
        transition: opacity;
    }

    .price-fade-enter, .price-fade-leave-to {
        opacity: 0;
    }

    .content {
        padding-top: 50px;;
        height: 1000px;
        width: 60%;
        margin: auto;
    }

    .address {
        height: 350px;
    }


</style>