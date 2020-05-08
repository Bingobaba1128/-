<template>
    <div class="header">
        <div class="collapse-btn" @click="collapseChage">
            <i v-if="!collapse" class="el-icon-s-unfold"></i>
            <i v-else class="el-icon-s-fold"></i>
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
                name: 'Admin'
            };
        },

         methods: {
             collapseChage() {
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
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
    .collapse-btn {
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
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

    .el-icon-s-unfold {
        transform: translateX(250px);
    }
</style>
