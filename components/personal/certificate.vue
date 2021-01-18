<template>
<div class="certificate">
  <div class="title">My Certificate</div>
  <div class="card_container">
    <div v-for="(item,index) in certificates" :key="index" class="card">
      <img src="~/assets/img/Main/certificate.png" alt="" class="img">
      <div class="validated">Validated</div>
      <div class="info">
        <div class="des">{{item.des}}</div>
        <div class="time">{{item.time}}</div>
      </div>
    </div>
    <div class="card add" @click="addNew">
      <img src="~/assets/img/personal/+.svg" alt="" class="addimg">
      <div class="txt">Add New Certificate</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props:[],
  computed:{
    certificates(){
      return this.$store.state.certificates||[]
    }
  },
  data(){
    return{
      // certificates:[{
      //   img:'1.png',
      //   isValidated:true,
      //   des:'Atheletic Participation Award',
      //   time:'2015-2016'
      // },{
      //   img:'1.png',
      //   isValidated:true,
      //   des:'Academic Achievement Certificate in Computer Science',
      //   time:'2015-2016'
      // }]
    }
  },
  methods:{
    addNew(){
      this.$router.push('/validation?schedule=1')
    }
  }
}
</script>

<style lang="scss" scoped>
.certificate{
  background: #EAEDF1;
  width: 100%;
  .title{
    font-size: 20px;
    color: #122134;
    margin: 21px 0 20px 20px;
  }
  .card_container{
    display: flex;
    flex-wrap: wrap;
    .card{
      width: 236px;
      height: 220px;
      background: #fff;
      margin-left: 20px;
      position: relative;
      cursor: pointer;
      border-radius: 4px;
      margin-bottom: 20px;
      .img{
        width: 179.5px;
        height: 128px;
        margin: auto;
        margin-top: 15px;
        background: #ACA092;
        position: relative;
        left: 50%;
        transform: translate(-50%,0);
      }
      .validated{
        position: absolute;
        left: 16px;
        top: 0;
        padding: 5px 10px;
        background: #67C23A;
        color: #fff;
        font-size: 12px;
        line-height: 1;
        border-radius:0px 0px 4px 4px;
      }
      .info{
        margin: 14px 16px 0 16px;
        border-top: 1px #DCDFE6 solid;
        .des{
          margin-top: 14px;
          font-size: 14px;
          color: #122134;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .time{
          font-size: 12px;
          color: #9BA6BE;
          margin-top: 6px;
        }
      }
    }
    .add{
      border:2px dashed rgba(220,223,230,1);
      background: #F7FAFD;
      display: flex;
      flex-direction: column;
      align-items: center;
      .addimg{
        position: relative;
        margin-top: 80px;
        margin-bottom: 20px;
      }
      .txt{
        font-size: 14px;
        color: #8C95A8;
      }
    }
  }
}
@media screen and (max-width: 500px){

}
</style>
