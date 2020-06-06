<template>
    <div class="account">
        <el-table
                v-loading="loading"
                :data="order.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                style="width: 100%">

            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">

                      <el-row v-for="(item,index) in props.row.orderItems" :key="index">

                          <el-col :span="4">
                              <el-image :src="item.goods.banner_img"></el-image>
                          </el-col>
                          <el-col :span="4">
                              {{item.goods.goods_name}}
                          </el-col>

                          <el-col :span="4">
                             购买数量:{{item.buy_number}}
                          </el-col>
                          <el-col :span="4">
                              总价：{{item.item_money}}
                          </el-col>
                      </el-row>
                    </el-form>
                </template>
            </el-table-column>


            <el-table-column
                    prop="order_time"
                    label="购买日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="order_id"
                    label="订单编号"
                    >
            </el-table-column>
            <el-table-column
                    prop="all_money"
                    label="总价"
                    >
            </el-table-column>
        </el-table>


        <div class="button">
            <el-pagination
                    background
                    :page-size="pagesize"
                    :current-page="currentPage"
                    @current-change="handleCurrentChange"
                    @prev-click="prev_click"
                    @next-click="next_click"
                    layout="prev, pager, next"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import ajax from "../ajax/ajax"
    import utils from "../ajax/utils";
    export default {
        name: "account",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    all_money:0,
                    order_id:""
                }, {
                    date: '2016-05-02',
                    all_money:0,
                    order_id:""
                }, {
                    date: '2016-05-02',
                    all_money:0,
                    order_id:""
                }, {
                    date: '2016-05-02',
                    all_money:0,
                    order_id:""
                }],
                loading:true,
                order:[],
                total:10,
                currentPage:1,
                pagesize:5

            }
        },
        methods:{
            handleClick(kk){
                console.log(kk)
            },
            prev_click(res){
                this.currentPage=res;
            },
            next_click(res){
                this.currentPage=res;
            },
            handleCurrentChange(val){
                this.currentPage=val;
                console.log(this.currentPage)
            }
        },
        mounted() {
            let mes=this.$message;
            let th=this;
            // 账单
            let user_id=1;
            if(this.$store.state.user.userid===0){
                user_id=1;
                this.$message({
                    showClose: true,
                    message: '请先登录',
                    type: 'error'
                })
                this.$router.push("/login");
            }else{
                user_id=this.$store.state.user.userid;

            }

            ajax.Dingdan(user_id,function (res,code) {
                if(code==200&&res.code==200){
                    th.total=res.data.order.length;
                    th.loading=false;
                    th.order=res.data.order;
                    for(var item in th.order){
                        th.order[item]["order_time"] =utils.getFormateDateByLong(th.order[item]["order_time"]);
                    }

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


        }
    }
</script>

<style scoped>
    .button{
        margin-top: 20px;
    }
    .account{
        margin-left: 20px;
    }
</style>