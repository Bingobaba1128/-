module.exports = {
    outputDir: "dist", // where to put static assets (js/css/img/font/...) // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败
    lintOnSave: true, // 使用带有浏览器内编译器的完整构建版本 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    runtimeCompiler: false, // babel-loader默认会跳过`node_modules`依赖. // 通过这个选项可以显示转译一个依赖
    transpileDependencies: [
    ],
  
    productionSourceMap: false, // 调整内部的webpack配置. // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {}, // CSS 相关选项
    css: {
      extract: true, // 允许生成 CSS source maps?
      sourceMap: false, // pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }
      loaderOptions: {}, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
      modules: false
    }, 
  
    parallel: require("os").cpus().length > 1, 
    pwa: {},
    devServer: {
      open: process.platform === "darwin",
      disableHostCheck: false,
      host: "localhost",
      port: 8080,
      https: false,
      hotOnly: false,
      // proxy: {
      //   '/api/': {
      //       target:'http://120.78.186.60:8086', // 你请求的第三方接口
      //       changeOrigin:true,
      //       pathRewrite:{  // 路径重写，
      //         '^/api/': ''  
      //       }
      //     }
      // }
    }, 
  
    pluginOptions: {
    },

    // config :{
    //   //请求授权地址
    //   userAuthorizationUri:"http://120.78.186.60:8087/oauth/authorize",
    //   //accessToken请求地址
    //   accessTokenUri : "https://github.com/login/oauth/access_token",
    //   //用户信息请求地址
    //   userInfoUri:"https://api.github.com/user",
    //   //登出请求地址
    //   logoutUri:"https://github.com/logout",
    //   //项目地址
    //   localuri :"http://localhost:9999",
    //  //回调地址
    //   redirect_uri : "http://192.168.137.98:8080",
    //   //案例资源服务器地址
    //   resUri:"http://localhost:8080",
    //   //客户端相关标识，请从认证服务器申请
    //   clientId: "erp_v",
    //   client_secret:"",
    //   //申请的权限范围
    //   scope:"",
    //   //可选参数，客户端的当前状态，可以指定任意值，用于校验，此次案例不做相关认证
    //   state:"",
    //   //一些固定的请求参数
    //   response_type:"code",
    //   grant_type : "authorization_code",
    //   code:"",
    // }
  };
