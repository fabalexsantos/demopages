<template>
  <div class="container">
    <top />
    <schedule :schedule="schedule" @pre="pre" @continues="continues"/>
    <add @continues="continues" v-if="schedule==1"/>
    <upload @continues="continues" v-if="schedule==2"/>
    <validators  @continues="continues" v-if="schedule==3"/>
    <send  @continues="continues" v-if="schedule==4"/>
  </div>
</template>

<script>
import top from '~/components/validation/top'
import schedule from '~/components/validation/schedule'
import add from '~/components/validation/add'
import upload from '~/components/validation/upload'
import validators from '~/components/validation/validators'
import send from '~/components/validation/send'
export default {
  components: {
    top,
    schedule,
    add,
    upload,
    validators,
    send
  },
  data(){
    return{
      schedule:1
    }
  },
  watch:{
    $route(){
      this.schedule=this.$route.query.schedule||1
    }
  },
  methods:{
    continues(){
      if(this.schedule<4){
        this.schedule++
      }
      this.$router.push({
        path: `/validation?schedule=${this.schedule}`,
      })
    },
    pre(){
      if(this.schedule>1){
        this.schedule--
      }
      this.$router.push({
        path: `/validation?schedule=${this.schedule}`,
      })
    }
  },
  async asyncData ({params, query = {}, redirect, app, store, route, error}) {
    // if(!store.state.username){
    //   redirect(301, `/login`)
    // }
    let schedule=Number(query.schedule)||1
    if(schedule>4){
      schedule=4
    }
    else if(schedule<1){
      schedule=1
    }
    return {
      schedule,
      query
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  font-family:Roboto-Regular,Roboto;
}
@media screen and (max-width: 500px){
  .container{

  }
}
</style>
