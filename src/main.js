import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router'
import store from './store/store'


import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/'

import config from './config/config'
import token from './utils/token'
import login from './utils/loginUtils'
import querystring from 'querystring'

Vue.use(ElementUI, {
    size: 'small'
});

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
Vue.prototype.$config = config;
Vue.prototype.$token = token;
Vue.prototype.$login = login;
Vue.prototype.$querystring = querystring;

axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';

// router.beforeEach((to, from, next) => {
//     document.title = `${to.meta.title}`;
//     const role = localStorage.getItem('ms_username');
//     if (!role && to.path !== '/login') {
//         next('/login');
//     } else {
//       next()
//     }
// });
// router.beforeEach((to, from, next) => {
//     if (store.getters.token) { // 判断是否有token
//       if (to.path === '/login') {
//         next({ path: '/' });
//       } else {
//         if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
//           store.dispatch('GetInfo').then(res => { // 拉取info
//             const roles = res.data.role;
//             store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
//               router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
//               next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
//             })
//           })
//         //   .catch(err => {
//         //     // console.log(err);
//         //   });
//         } else {
//           next() //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
//         }
//       }
//     } 
    // else {
    //   if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
    //     next();
    //   } else {
    //     next('/login'); // 否则全部重定向到登录页
    //   }
    // }
//   });

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');