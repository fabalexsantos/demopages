<template>
<div class="toparea">
  <div class="top">
    <img src="~/assets/img/Home/logo.svg" alt="" class="icon">
    <div class="userinfo">
      <img :src="`/avatar/${userinfo.img}`" alt="" class="avatar">
      {{userinfo.name}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  components: {
    
  },
  computed:{
    userinfo(){
      if(this.$store.state.identity==0){
        return this.$store.state.user
      }
      else{
        return this.$store.state.viewer
      }
    }
  },
  data(){
    return{
      
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
.toparea{
  width: 100%;
  border-bottom: 1px #D2D7E1 solid;
  padding: 0 40px;
  box-shadow:0px 1px 0px 0px rgba(210,215,225,1);
  .top{
    max-width: 1280px;
    margin: auto;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon{
      height: 40px;
    }
    .userinfo{
      color: #5E6476;
      font-size: 14px;
      font-family:PingFangSC-Regular,PingFang SC;
      display: flex;
      align-items: center;
      .avatar{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 4px;
      }
    }
  }
}
@media screen and (max-width: 500px){

}
</style>
