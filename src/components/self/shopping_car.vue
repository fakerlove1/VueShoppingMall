<template>
    <div>
        <el-table
                ref="multipleTable"
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange"
        >
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>

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
                    <el-input-number v-model="scope.row.number" @change="handleChange(scope.row.number)"
                                     label="描述文字"></el-input-number>
                </template>

            </el-table-column>

        </el-table>

    </div>
</template>

<script>
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
                multipleTable: []
            }

        },
        methods: {
            handleChange(value) {
                console.log(value);
            },
            // 这个是 在数据变化时 进行的操作
            handleSelectionChange(data){
                this.multipleTable=data;
                console.log(data)
                console.log(data[0].number)
            }
        }
    }
</script>

<style scoped>

</style>