<template>
    <div class="header">
        <div class="header-left">
            <div class="collapse-btn" @click="collapseChage">
                <i v-if="!collapse" class="el-icon-s-unfold"></i>         
                <i v-else class="el-icon-s-fold"></i>  
            </div>
            <div class="root system-list">
                面料系统
            </div>
            <div class="expanded" v-show="showSublist">
                <div class="system-list">
                    <a href="http://120.78.186.60:8081/" target="_blank">
                        <el-dropdown-item>成衣系统</el-dropdown-item>
                    </a>
                </div>
                <div class="system-list">
                    服装设计系统
                </div>
                <div class="system-list">
                    人资管理系统
                </div>
                <a href="http://120.78.186.60:8080/caiwu/login" target="_blank">
                    <el-dropdown-item>财务管理</el-dropdown-item>
                </a>
            </div>
            
            
        </div>

        <div class="header-right">
            <div class="header-user-con">
                <div class="user-avator">
                    <div class="el-icon-s-custom"></div>
                </div>

                <el-dropdown class="user-name">
                    <span class="el-dropdown-link">
                        Admin
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                </el-dropdown>

                <div class="btn-message">
                    <el-tooltip>
                        <i class="el-icon-message"></i>
                    </el-tooltip>
                    <span class="btn-message-badge">消息</span>
                </div>

                <div class="btn-logout">
                    <i class="el-icon-switch-button"></i>
                    <span>退出</span>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import bus from '../../utils/bus';

    export default {
        data() {
            return {
                collapse: false,
                name: 'Admin',
                showSublist: false
            };
        },

         methods: {
             collapseChage() {
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
                this.showSublist = !this.showSublist;
            }
         }
    }
</script>

<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
    }
    .header-left {
        float: left;
        display: flex;
        padding-left:20px;
    }
    .collapse-btn {
        cursor: pointer;
        line-height: 70px;
        order:2
    }
    .header .logo {
        float: left;
        width: 250px;
        line-height: 70px;
    }
    .header-right {
        float: right;
    }
    .header-user-con {
        display: flex;
        height: 70px;
        align-items: center;
    }

    .expanded{
        margin-left: -20px;
        order:3;
        display: flex
    }
    .root {
        order: 1;
    }

    .system-list {
        padding:20px 6px;
    }

    .btn-message {
        position: relative;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        margin-left:10px;
        cursor: pointer;
    }
    .btn-message-badge {
        width: 60px;
        height: 8px;
        border-radius: 4px;
        color: #fff;
    }

    .user-name {
        margin-left: 10px;
    }
    .user-avator {
        margin-left: 20px;
    }
    .el-dropdown-link {
        color: #fff;
        cursor: pointer;
    }
    .el-dropdown-menu__item {
        text-align: center;
    }

    .el-icon-message {
        color:white
    }

    .btn-logout {
        margin: 0 10px;
    }

    .el-icon-s-fold {
        transform: translateX(500px)
    }
</style>
