<template>
    <div class="">
        
        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`待审批(${unread.length})`" name="first">
                    <el-table :data="unread" :show-header="false" style="width: 100%">
                        <el-table-column>
                            <template v-slot="scope">
                                <span class="message-title">{{scope.row.title}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" width="180"></el-table-column>
                    </el-table>

                </el-tab-pane>

                <!-- 绑定 label 实时统计已读消息数量 -->
                <el-tab-pane :label="`已审批(${read.length})`" name="second">
                    <!-- 对是否选中当前标签页进行判断 -->
                    <template v-if="message === 'second'">
                        <el-table :data="read" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <!-- 动态分发数据 -->
                                <template v-slot="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <!-- 动态渲染data中模拟的时间 -->
                            <el-table-column prop="date" width="150"></el-table-column>
                            <el-table-column width="120">
                                <template v-slot="scope">
                                    <el-button type="danger" @click="handleDel(scope.$index)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>

                    </template>
                </el-tab-pane>
                <!-- 绑定 label 实时统计回收站消息数量 -->
                <el-tab-pane :label="`发起审批(${recycle.length})`" name="third">
                    <!-- 对是否选中当前标签页进行判断 -->
                    <template v-if="message === 'third'">
                        <el-table :data="recycle" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <!-- 动态分发数据 -->
                                <template v-slot="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>

                        </el-table>

                    </template>
                </el-tab-pane>

                <el-tab-pane :label="`抄送(${recycle.length})`" name="forth">
                    <!-- 对是否选中当前标签页进行判断 -->
                    <template v-if="message === 'third'">
                        <el-table :data="recycle" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <!-- 动态分发数据 -->
                                <template v-slot="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>

                        </el-table>

                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import bus from '../../utils/bus'

    export default {
        name: 'tabs',
        data() {
            return {
                message: 'first',
                showHeader: false,
                unread: [{
                    date: '2020-05-09 20:00:00',
                    title: '【审批】韶关市北江制造 销售部-业务员 好优秀 的内销合同已提交，请您审批',
                    author: '财务部业务主管-郑智'
                },{
                    date: '2020-05-08 22:00:00',
                    title: '【审批】越南纺织成衣 战略销售部-总监 白云 的调版单已提交，请您审批',
                    author: '财务部业务主管-郑智'
                }],
                read: [{
                    date: '2020-05-09 19:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
                }],
                recycle: [{
                    date: '2020-05-09 18:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
                }]
            }
        },
        methods: {
            // 操作对应信息，标为已读，获取传入的当前信息索引
        handleRead(index) {
            // 将未读信息对象数组当前索引上的对象删除，并返回给 item
            const item = this.unread.splice(index, 1);
            // 将 item 和 存放已读信息的对象数组进行拼接。
            this.read = item.concat(this.read);
            // 通过 bus 通信将当前未读信息的数量进行传递
            bus.$emit('msg',this.unread.length);
        },
        // 操作所有信息，标为已读
        handleAllRead() {
            // 将未读信息对象数组中所有信息全部删除，并返回给 item
            const item = this.unread.splice(0,this.unread.length);
            // 将 item 和 存放已读信息的对象数组进行拼接。
            this.read = item.concat(this.read);
            // 通过 bus 通信将当前未读信息的数量进行传递
            bus.$emit('msg',this.unread.length);
        },
            // 操作对应信息，标为回收，获取传入的当前信息索引
        handleDel(index) {
            // 将已读信息对象数组当前索引上的对象删除，并返回给 item
            const item = this.read.splice(index, 1);
            // 将 item 和 存放回收信息的对象数组进行拼接。
            this.recycle = item.concat(this.recycle);
        },
        // 操作所有信息，标为回收
        handleAllDel() {
            // 将已读信息对象数组中所有信息全部删除，并返回给 item
            const item = this.read.splice(0, this.read.length);
            // 将 item 和 存放回收信息的对象数组进行拼接。
            this.recycle = item.concat(this.recycle);
        },
            // 操作对应信息，标为已读，获取传入的当前信息索引
            handleRestore(index) {
                // 将回收信息对象数组当前索引上的对象删除，并返回给 item
                const item = this.recycle.splice(index, 1);
                // 将 item 和 存放已读信息的对象数组进行拼接。
                this.read = item.concat(this.read);
            },
            // 操作所有信息，彻底删除
            handleAllDelete() {
                // 将回收信息对象数组中所有信息全部删除
                this.recycle.splice(0, this.recycle.length);
            }
        },
        computed: {
            unreadNum(){
                return this.unread.length;
            }
        }
    }

</script>

<style>
.message-title{
    cursor: pointer;
}
.handle-row{
    margin-top: 30px;
}
</style>