<template>
  <div class="container">
    <div class="box">
      <img src="~/assets/img/Home/logo.svg" alt="" class="icon">
      <div class="child_box">
        <div class="title">Log In</div>
        <input type="text" placeholder="User Name" class="input" v-model="username">
        <input type="text" placeholder="Password" class="input" v-model="password">
        <div class="login" @click="login">Log In</div>
        <div class="forget">Forget Password</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    login(){
      this.$store.commit('setUserName', {
        username: this.username
      })
      this.$store.commit('setIdentity', {
        identity: 0
      })
      this.$router.push('/validation?schedule=1')
    }
  },
  async asyncData ({params, query = {}, redirect, app, store, route, error}) {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100vh;
  background: url('~assets/img/Log-In/log-in bg.png') no-repeat center;
  background-size: cover;
  .box{
    background: #fff;
    width: 476px;
    height: 438px;
    box-shadow:0px 2px 25px 0px rgba(155,166,190,0.15);
    border-radius:4px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon{
      position: relative;
      margin-top: 54px;
      margin-bottom: 44px;
    }
    .child_box{
      width: 320px;
      font-family:Roboto-Regular,Roboto;
      .title{
        color: #122134;
        font-size: 14px;
        position: relative;
        margin-left: 15px;
      }
      .input{
        width: 320px;
        height: 40px;
        line-height: 40px;
        border-radius:4px;
        border:1px solid rgba(220,223,230,1);
        margin: 8px 0;
        padding-left: 15px;
        font-size: 14px;
        outline: none;
      }
      .login{
        width: 320px;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
        background: #3C8BEC;
        color: #fff;
        text-align: center;
        margin: 8px 0 16px 0;
        cursor: pointer;
      }
      .forget{
        color: #9BA6BE;
        font-size: 14px;
        position: relative;
        margin-left: 15px;
        cursor: pointer;
      }
    }
  }
}
@media screen and (max-width: 500px){
  .container{
    .box{
      width: 100%;
    }
  }
}
</style>
