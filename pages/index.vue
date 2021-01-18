<template>
  <div class="container">
    <img src="~/assets/img/Home/logo.svg" alt="" class="icon">
    <div class="title">AccuChain's Validation Service</div>
    <div class="button" @click="login">
      Click Here to Log-In
      <img src="~/assets/img/Home/→.svg" alt="">
    </div>
    <img src="~/assets/img/Home/float 2.svg" alt="" class="decoration1">
    <img src="~/assets/img/Home/float.svg" alt="" class="decoration2">
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods:{
    login(){
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  text-align: center;
  background: url('~assets/img/Home/bg.svg') no-repeat center;
  background-position-y: bottom;
  .icon{
    height: 56px;
    margin-top: 98px;
  }
  .title{
    font-weight:900;
    font-size:42px;
    margin-top: 37px;
    font-family:Roboto-Black,Roboto;
    letter-spacing:-0.42px;
  }
  .button{
    border: 1px #3C8BEC solid;
    color: #3C8BEC;
    font-size: 16px;
    padding: 14px 27px;
    font-family:Roboto-BoldItalic,Roboto;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 36px;
    display: flex;
    align-items: center;
    img{
      margin-left: 7px;
    }
  }
  .decoration1{
    position: relative;
    top: 18px;
    margin-left: 221px;
  }
  .decoration2{
    position: relative;
    margin-top: 42px;
  }
}

// .title {
//   font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
//     'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
//   display: block;
//   font-weight: 300;
//   font-size: 100px;
//   color: #35495e;
//   letter-spacing: 1px;
// }

// .subtitle {
//   font-weight: 300;
//   font-size: 42px;
//   color: #526488;
//   word-spacing: 5px;
//   padding-bottom: 15px;
// }

// .links {
//   padding-top: 15px;
// }
</style>
