<template>
    <div>
        <div v-if="have" class="kk">
            <el-table
                    v-loading="loading"
                    ref="multipleTable"
                    :data="tableData"
                    @selection-change="handleSelectionChange"
                    style="width: 100%">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>

                <el-table-column
                        prop="goods.goods_name"
                        label="产品名称"
                        width="180">
                </el-table-column>

                <el-table-column
                        prop="date"
                        label="图片"
                        width="180">
                    <template slot-scope="scope">
                        <el-image :src="scope.row.goods.banner_img" class="img"></el-image>
                    </template>
                </el-table-column>

                <el-table-column
                        prop="shopping_goodsnumber"
                        label="购买数量"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="shopping_needmoney"
                        label="购买总价">
                </el-table-column>

                <el-table-column
                        label="操作">
                    <template slot-scope="scope">
                        <el-input-number v-model="scope.row.shopping_goodsnumber" @change="handleChange(scope.row.shopping_goodsnumber,scope.$index,scope.row)"
                                         label="描述文字"></el-input-number>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div v-else class="kk">
            对不起，请你添加购物车
        </div>


        <el-divider></el-divider>

        <el-row>
            <el-col :span="3" >总计：{{allmoney}}</el-col>
            <el-col :span="3" >
                <el-button type="primary" @click="buycar">购买</el-button>
            </el-col>
        </el-row>

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
</template>

<script>
    import ajax from "../ajax/ajax";
    // 购物的 Vue 地址,表示是 购物车
    export default {
        name: "shopping",

        data() {
            return {
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄',
                        number: 1
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄',
                        number: 11
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄',
                        number: 13
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄',
                        number: 8
                    }],
                multipleTable: [],
                total:10,
                currentPage:1,
                pagesize:5,
                loading:true,
                have:true,
                allmoney:0,
            }

        },

        mounted() {
            let mes=this.$message;
            let th=this;
            if(this.$store.state.user.status===false){
                this.$message({
                    showClose: true,
                    message: '请先登录',
                    type: 'error'
                })
                th.have=false;

                this.$router.push("/login");
                // mes({
                //     showClose: true,
                //     message: '对不起，购买失败，请检查网络',
                //     type: 'error'
                // });
            }else{
                ajax.ShoppingCar(this.$store.state.user.userid,function (res,code) {
                    if(code==200&&res.code==200){
                        th.total=res.data.length;
                        if(th.total<=0){
                            th.have=false;
                        }
                        th.loading=false;
                        th.tableData=res.data;
                        mes({
                            showClose: true,
                            message: '加载成功',
                            type: 'success'
                        });
                    }else{

                        if(code==400){
                            // 没有数据
                            th.have=false;
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
                });
            }
        },
        methods: {
            buycar(){

                if(this.multipleTable.length<=0){
                    this.$message({
                        showClose: true,
                        message: "对不起你没有买任何东西",
                        type: 'error'
                    })
                }else{
                    var TableData=[];
                    for(var item in this.multipleTable){
                        var goods=new Object();
                        goods.id=this.multipleTable[item]["goods_id"];
                        goods.name=this.multipleTable[item]["goods"]["goods_name"];
                        goods.number=this.multipleTable[item]["shopping_goodsnumber"];
                        goods.price=this.multipleTable[item]["shopping_needmoney"];
                        TableData.push(goods);
                    }
                    this.$router.push(
                        {
                            path: "/buy",
                            query: {
                                TableData:TableData
                            }
                        })
                }


            },
            handleSelectionChange(value) {
                this.multipleTable=value;
                var all=0;
                for(var item in value){
                    all+=value[item]["shopping_needmoney"];
                }
                this.allmoney=all;
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
            },
            handleChange(val,row,type){
                var price=this.tableData[row]['goods']["sell_price"];
                console.log(type);
                var all=this.allmoney;
                for(var item in this.multipleTable){
                    if(type.goods_id===this.multipleTable[item]["goods_id"]){
                       all=all-this.tableData[row]["shopping_needmoney"]+val*price;
                    }
                }
                this.tableData[row]["shopping_needmoney"]=val*price;
                this.allmoney=all;
            }

        }
    }
</script>

<style scoped>
    .kk{
        height: auto;
    }
    .img{
        height: 100px;
        width: 100px;
    }
</style>