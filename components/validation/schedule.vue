<template>
<div class="content">
  <div class="box">
    <div class="back">
      <div class="add" @click="addnew">Add New Certificate</div>
      <div class="splitter"></div>
      <div class="backhome" @click="gohome">
        <img src="~/assets/img/Main/Home.svg" alt="" class="icon">
        <div>Home</div>
      </div>
    </div>
    <div class="schedule">
      <div class="pre" @click="previous"><span v-if="schedule!=1">Previous</span></div>
      <div class="item">
        <img src="~/assets/img/schedule/1.svg" alt="" class="icon" v-if="schedule>=1">
      </div>
      <img src="~/assets/img/Main/11.svg" alt="" class="icon" v-if="schedule>=2">
      <img src="~/assets/img/Main/22.svg" alt="" class="icon" v-else>
      <div class="item">
        <img src="~/assets/img/schedule/2.svg" alt="" class="icon" v-if="schedule>=2">
        <img src="~/assets/img/schedule/22.svg" alt="" class="icon" v-else>
      </div>
      <img src="~/assets/img/Main/11.svg" alt="" class="icon" v-if="schedule>=3">
      <img src="~/assets/img/Main/22.svg" alt="" class="icon" v-else>
      <div class="item">
        <img src="~/assets/img/schedule/3.svg" alt="" class="icon" v-if="schedule>=3">
        <img src="~/assets/img/schedule/33.svg" alt="" class="icon" v-else>
      </div>
      <img src="~/assets/img/Main/11.svg" alt="" class="icon" v-if="schedule>=4">
      <img src="~/assets/img/Main/22.svg" alt="" class="icon" v-else>
      <div class="item">
        <img src="~/assets/img/schedule/4.svg" alt="" class="icon" v-if="schedule>=4">
        <img src="~/assets/img/schedule/44.svg" alt="" class="icon" v-else>
      </div>
      <div class="next" @click="next"><span v-if="schedule!=4">Next</span></div>
    </div>
    <div class="Titile">
      <div class="title">{{Titles[schedule-1].title}}</div>
      <div class="des">({{Titles[schedule-1].des}})</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props:['schedule','pre','continues'],
  components: {
    
  },
  data(){
    return{
      Titles:[{
        title:'Add Description of Achievement',
        des:'Add details about this achievement'
      },{
        title:'Upload Certificate',
        des:'Upload the certificate you want to validate'
      },{
        title:'Add Validators',
        des:'Add people to this achievement'
      },{
        title:'Send for approval',
        des:'Review and send for approval from validators'
      }]

    }
  },
  methods:{
    addnew(){
      this.$router.push('/validation?schedule=1')
      // this.$router.go('/validation?schedule=1')
    },
    gohome(){
      this.$router.push('/personal')
    },
    previous(){
      this.$emit('pre')
    },
    next(){
      this.$emit('continues')
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  width: 100%;
  padding: 0 40px;
  color: #3C8BEC;
  font-size: 16px;
  .box{
    max-width: 1280px;
    margin: auto;
    .back{
      display: flex;
      align-items: center;
      margin-top: 20px;
      .add{
        cursor: pointer;
      }
      .splitter{
        background: #DCDFE6;
        width: 1px;
        height: 16px;
        margin: 0 16px;
        flex-shrink: 0;
      }
      .backhome{
        display: flex;
        align-items: center;
        cursor: pointer;
        img{
          margin-right: 6px;
        }
      }
    }
    .schedule{
      display: inline-flex;
      position: relative;
      width: auto;
      left: 50%;
      margin-top: 27px;
      transform: translate(-50%,0);
      height: 24px;
      flex-wrap: wrap;
      .icon{
        width: 24px;
        height: 24px;
      }
      .pre{
        margin-right: 35px;
        cursor: pointer;
      }
      .next{
        margin-left: 35px;
        cursor: pointer;
      }
      .item{
        margin: 0 8px;
      }
    }
    .Titile{
      font-family:PingFangSC-Regular,PingFang SC;
      margin-top: 43px;
      text-align: center;
      .title{
        color: #122134;
        font-size: 20px;
      }
      .des{
        margin-top: 16px;
        color: #9BA6BE;
        font-size: 14px;
      }
    }
  }
}
@media screen and (max-width: 500px){

}
</style>
