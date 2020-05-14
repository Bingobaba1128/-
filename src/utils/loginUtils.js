//import RndNum from "./ranNum";
//var querystring = require('querystring')

var loginUtil ={
  login:function (vue) {
    // vue.$config.code = RndNum(4);
    vue.$config.code = '123';
    // var authorUrl = vue.$config.userAuthorizationUri;
    var authorUrl = 'http://120.78.186.60:8087/oauth/authorize';
    authorUrl = authorUrl + ('?' + vue.$querystring.stringify({
    //   client_id:vue.$config.clientId,
    //   response_type:vue.$config.response_type,
    //   scope:vue.$config.scope,
    //   state:vue.$config.state,
    //   redirect_uri:vue.$config.redirect_uri,
       client_id:'erp_v',
       response_type:'code',
       state:'123',
       redirect_uri:'http://192.168.137.98:8080',  
    }))
    window.location.href = authorUrl;
  },
  logout:function (vue,return_url) {
    vue.$router.push('/logout'+"?return_url="+return_url)
  },
  checkLogin:function(vue){
    var tokenInfo = vue.$token.loadToken();
    window.console.log(tokenInfo);
    if (tokenInfo.access_token===null ||tokenInfo.access_token==="null" ){
      return false;
    }
    return true;
  }
} 

export default loginUtil;
