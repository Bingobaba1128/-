// var config = {
//     userAuthorizationUri:"http://120.78.186.60:8087/oauth/authorize",
//     accessTokenUri : "/api/oauth/token",
//     userInfoUri:"",
//     logoutUri:"http://192.168.137.98:8080/logout",
//     localuri :"http://192.168.137.98:8080",
//     redirect_uri : "http://192.168.137.98:8080/login",
//     resUri:"http://localhost:8080",
//     clientId: "erp_v",
//     client_secret:"erpVietnam",
//     state:"",
//     response_type:"code",
//     grant_type : "authorization_code",
//     code:"",
//   }
var config={
    //请求授权地址
    userAuthorizationUri:"https://github.com/login/oauth/authorize",
    //accessToken请求地址
    accessTokenUri : "https://github.com/login/oauth/access_token",
    //用户信息请求地址
    userInfoUri:"https://api.github.com/user",
    //登出请求地址
    logoutUri:"https://github.com/logout",
    //项目地址
    localuri :"http://192.168.137.98:8080",
   //回调地址
    redirect_uri : "http://192.168.137.98:8080/login",
    //案例资源服务器地址
    resUri:"http://localhost:8080",
    //客户端相关标识，请从认证服务器申请
    clientId: "2c8fec1f60c952885404",
    client_secret:"fd199beced6ddc64e8f2793ca305b878bd4b3685",
    //申请的权限范围
    scope:"user",
    //可选参数，客户端的当前状态，可以指定任意值，用于校验，此次案例不做相关认证
    state:"",
    //一些固定的请求参数
    response_type:"token",
    grant_type : "authorization_code",
    code:"",
  }
  

export default config;