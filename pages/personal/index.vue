<template>
  <div class="container">
    <top />
    <div class="myInfo">
      <info :menu="menu" @changeMenu="changeMenu"/>
      <certificate/>
    </div>
  </div>
</template>

<script>
import top from '~/components/validation/top'
import info from '~/components/personal/info'
import certificate from '~/components/personal/certificate'
export default {
  components: {
    top,
    info,
    certificate
  },
  data(){
    return{
      menu:1
    }
  },
  methods:{
    changeMenu(id){
      this.menu=id
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
  font-family:Roboto-Regular,Roboto;
  .myInfo{
    display: flex;
  }
}
@media screen and (max-width: 500px){
  .container{

  }
}
</style>
