<template>
<div class="box">
  <img src="~/assets/img/Main/certificate.png" alt="" class="certificate">
  <div class="des">Academic Achievement Certificate in Computer Science</div>
  <div class="time">28 June 2019</div>
  <div class="item">
    <div class="title title1">Validator</div>
    <div class="input input1">
      <div class="info_box">
        <img :src="`/avatar/${validator.img}.png`" alt="" class="img">
        <div class="baseinfo">
          <div class="name">{{validator.name}}</div>
          <div class="email">{{validator.email}}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="item">
    <div class="input input2" v-if="!isEdit" v-html="value">
    </div>
    <textarea name="1" id="1" cols="30" rows="10" class="input input2" v-else v-model="value"></textarea>
  </div>
  <div class="btns">
    <div class="btn edit" @click="edit">Edit Information</div>
    <div class="btn" @click="send">Continue & Send</div>
  </div>
</div>
</template>

<script>
export default {
  props:['continues'],
  components: {
  },
  data(){
    return{
      validator:{
        name:'Robert William',
        email:'rwilliam@westdaleschool.org',
        img:'Robert William',
      },
      isEdit:false,
      value:'Hi,I appreciate if you could validate the attached Academic Achievement Certificate in Computer Science.Thank You.'
    }
  },
  methods:{
    edit(){
      this.isEdit=true
    },
    send(){
      this.$store.commit('addCertificates', {
        certificate:{
          img:'1.png',
          isValidated:true,
          des:'Atheletic Participation Award',
          time:'2015-2016'
        }
      })
      this.$router.push('/personal')
    }
  }
}
</script>

<style lang="scss" scoped>
input,button,select,textarea{outline:none;border: none;}
textarea{resize:none}
.box{
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  .certificate{
    width: 244px;
    height: 174px;
    margin-bottom: 20px;
  }
  .des{
    font-size: 16px;
    color: #122134;
  }
  .time{
    font-size: 14px;
    color: #9BA6BE;
    font-family:PingFangSC-Regular,PingFang SC;
    margin-top: 10px;
    margin-bottom: 32px;
  }
  .item{
    display: inline-flex;
    align-items: baseline;
    justify-content: center;
    position: relative;
    margin: auto;
    .title{
      position: absolute;
      left: -15px;
      top:6px;
      transform: translate(-100%,0);
      color: #9BA6BE;
      font-size: 14px;
    }
    .input{
      width: 388px;
      height: 40px;
      border-radius: 4px;
      border: 1px #DCDFE6 solid;
      margin-bottom: 16px;
      box-sizing: initial;
      color: #122134;
      font-size: 14px;
      padding:0 15px;
    }
    .title1{
      top: 12px;
    }
    .input1{
      width: 420px;
      border: none;
      padding: 0;
      .info_box{
        display: flex;
        align-items: center;
        width: 100%;
        .img{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-right: 10px;
        }
        .baseinfo{
          font-size: 14px;
          flex-shrink: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          .name{
            color: #122134;
          }
          .email{
            color: #8C95A8;
          }
        }
      }
    }
    .input2{
      height: 118px;
      padding: 10px 15px;
      font-family:Roboto-Italic,Roboto;
      overflow: auto;
    }
  }
  .btns{
    display: flex;
    .btn{
      background: #3C8BEC;
      color: #fff;
      width: 152px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 4px;
      font-size: 14px;
      margin: auto;
      margin-top: 16px;
      margin-bottom: 54px;
      cursor: pointer;
    }
    .edit{
      border: 1px #DCDFE6 solid;
      background: #fff;
      color: #8C95A8;
      margin-right: 16px;
    }
  }
}

@media screen and (max-width: 500px){
.box{
  .item{
    flex-wrap: wrap;
    .title{
      position: relative;
      margin-top: 20px;
      left: 2%;
      top: 0;
      transform: translate(0,0);
      margin: auto;
      text-align: left;
    }
    .input{
      width: 96%;
    }
  }
}
}
</style>
