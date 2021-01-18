<template>
<div class="info">
  <div class="base">
    <img src="/avatar/B-John Appleseed.png" alt="" class="avatar">
    <div class="name">{{$store.state.username}}</div>
    <div class="verify">
      <img src="~/assets/img/personal/Verified Student.svg" alt="" class="icon">
      <div>Verified Student</div>
    </div>
  </div>
  <div class="menus">
    <div class="menu" :class="[menu==1?'menu active':'']" @click="change(1)">
      <img src="~/assets/img/personal/Certificates.svg" alt="" class="icon" v-if="menu==1">
      <img src="~/assets/img/personal/Certificates-G.svg" alt="" class="icon" v-else>
      <div>Certificates</div>
    </div>
    <div class="menu" :class="[menu==2?'menu active':'']" @click="change(2)">
      <img src="~/assets/img/personal/Setting.svg" alt="" class="icon" v-if="menu==2">
      <img src="~/assets/img/personal/Setting-G.svg" alt="" class="icon" v-else>
      <div>Setting</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props:['menu','changeMenu'],
  data(){
    return{
      
    }
  },
  methods:{
    change(id){
      this.$emit('changeMenu',id)
    }
  }
}
</script>

<style lang="scss" scoped>
.info{
  width: 236px;
  height: calc(100vh - 61px);
  background: #fff;
  flex-shrink: 0;
  .base{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family:PingFangSC-Regular,PingFang SC;
    .avatar{
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-top: 50px;
      margin-bottom: 20px;
    }
    .name{
      font-size: 16px;
      color: #122134;
      margin-bottom: 8px;
    }
    .verify{
      border:1px #3C8BEC solid;
      border-radius: 11px;
      color: #3C8BEC;
      font-size: 12px;
      display: flex;
      align-items: center;
      padding: 5px 11px;
      line-height: 12px;
      margin-bottom: 47px;
      .icon{
        width: 12px;
        height: 12px;
        margin-right: 4px;
      }
    }
  }
  .menus{
    .menu{
      display: flex;
      align-items: center;
      height: 44px;
      font-size: 14px;
      color: #122134;
      cursor: pointer;
      .icon{
        margin-left: 29px;
        margin-right: 9px;
      }
    }
    .active{
      background: rgba(60,139,236,0.1);
      color: #3C8BEC;
      border-right: 3px #3C8BEC solid;
    }
  }
}
@media screen and (max-width: 500px){

}
</style>
