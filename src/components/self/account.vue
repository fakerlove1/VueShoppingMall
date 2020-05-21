<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="购货日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="总价"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="购买物品">
            </el-table-column>
            <el-table-column
            label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="button">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="100">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "account",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods:{
            handleClick(kk){
                console.log(kk)

            }
        }
    }
</script>

<style scoped>
    .button{
        margin-top: 20px;
    }
</style>