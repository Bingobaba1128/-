<template>
  <div>
  <p></p>
  </div>
</template>

<script>
// export default {
//   name: 'ssologin',
//   data () {
//     return {
//       state:"",
//       code:"",
//     }
//   },
//   methods:{
//     getToken:function(){
//       this.$token.getTokenFromService(this,this.code,(response)=>{
//         window.console.log(response)
//         this.$token.savetoken(response.data);
//         // this.$router.push('/user');
//         this.$router.push('/home');
//       },function (error) {
//         alert(error);
//       });
//     }
//   },
//   mounted:function () {
//     this.code = this.$route.query.code;
//     this.state = this.$route.query.state;
//     window.console.log('access code',this.code,this.state)
//     this.getToken();
//   }
// }
export default {
  name: 'ssologin',
  data () {
    return {
      state:"",
      code:"",
    }
  },
  methods:{
    getToken:function(){
      this.$token.getTokenFromService(this,this.code,(response)=>{
        this.$token.savetoken(response.data);
        this.$router.push('/user');
      },function (error) {
        alert(error);
      });
    }
  },
  mounted:function () {
    this.code = this.$route.query.code;
    this.state = this.$route.query.state;
    window.console.log('before token get')
    this.getToken();
  }
}
</script>

<style>
</style>

