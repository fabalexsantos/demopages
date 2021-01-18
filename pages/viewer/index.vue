<template>
  <div class="container">
    <div class="box">
      <img src="~/assets/img/Home/logo.svg" alt="" class="icon">
      <div class="child_box">
        <div class="btns">
          <div class="btn" :class="[IsRegistration?'btn active':'']" @click="IsRegistration=true">Registration</div>
          <div class="btn" :class="[!IsRegistration?'btn active':'']" @click="IsRegistration=false">Log-In</div>
        </div>
        <div v-if="IsRegistration">
          <input type="text" placeholder="Viewer Full First Name" class="input">
          <input type="text" placeholder="Viewer Full Last Name" class="input">
          <input type="text" placeholder="Viewer Code (6 character)" class="input">
          <div class="login" @click="registration">Registration</div>
        </div>
        <div v-else>
          <input type="text" placeholder="Viewer Name" class="input" v-model="username">
          <div class="login" @click="login">Log-In</div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import {setCookieEx} from '../../utils/cookie'
export default {
  components: {
    
  },
  data(){
    return{
      username:'',
      password:'',
      IsRegistration:true
    }
  },
  methods:{
    registration(){

    },
    login(){
      this.$store.commit('setIdentity', {
        identity: 1
      })
      this.$router.push('/signature')
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
  min-height: 619px;
  background: url('~assets/img/Log-In/log-in bg.png') no-repeat center;
  background-size: cover;
  font-family:Roboto-Regular,Roboto;
  .box{
    background: #fff;
    width: 476px;
    // height: 438px;
    box-shadow:0px 2px 25px 0px rgba(155,166,190,0.15);
    border-radius:4px;
    position: relative;
    left: 50%;
    top: 141px;
    transform: translate(-50%,0);
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
      .btns{
        color: #122134;
        font-size: 14px;
        position: relative;
        // margin-left: 15px;
        display: flex;
        margin-bottom: 2px;
        .btn{
          margin: 0 15px;
          cursor: pointer;
          line-height: 14px;
        }
        .active{
          color: #3C8BEC;
        }
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
        margin: 8px 0 78px 0;
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
