<template>
    <div class="tabZujian">
        <el-tabs v-model="activeName">
            <el-tab-pane label="tab1" name="first" :key="'first'">
                <child1></child1>
            </el-tab-pane>
    
            <el-tab-pane label="tab2" name="second" :key="'second'">
                <child2></child2>    
            </el-tab-pane>
        </el-tabs>
        
    </div>
</template>

<script>
import tabZujianChild1 from '@/tabComponents/tabZujianChild1'
import tabZujianChild2 from '@/tabComponents/tabZujianChild2'
export default {
    name: 'tabZujian',
    components:{
        child1:tabZujianChild1,
        child2:tabZujianChild2
    },
    data() {
        return {
            //默认第一个选项卡
            activeName: "first",
        }
    },
    mounted(){
        
    }
}
</script>