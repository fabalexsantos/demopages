<template>
<div>
  <top />
  <div class="cotainer">
    <div class="top">
      <img src="~/assets/img/Main/←.svg" alt="" class="back_icon">
      <img src="/avatar/S-John Appleseed.png" alt="" class="avatar">
      <div class="userinfo">
        <div class="name">
          {{$store.state.user.name}}
          <img src="~/assets/img/personal/Verified Student.svg" alt="" class="icon">
        </div>
        <div class="email">
          John1234@accuchain.com
        </div>
      </div>
    </div>
    <div class="schedule">
      <img src="~/assets/img/schedule/1.svg" alt="" class="icon">
      <img src="~/assets/img/Main/11.svg" alt="" class="line">
      <img src="~/assets/img/schedule/2.svg" alt="" class="icon">
      <img src="~/assets/img/Main/11.svg" alt="" class="line">
      <img src="~/assets/img/schedule/3.svg" alt="" class="icon">
      <img src="~/assets/img/Main/11.svg" alt="" class="line">
      <img src="~/assets/img/schedule/4.svg" alt="" class="icon">
    </div>
    <div class="title">Validator Signature</div>
    <img src="~/assets/img/Main/certificate.png" alt="" class="certificate_img">
    <div class="des">Academic Achievement Certificate in Computer Science</div>
    <div class="time">28 June 2019</div>
    <img src="~/assets/img/Main/signature.png" alt="" class="signature">
    <div class="signature_line"></div>
    <div class="signature_txt">add your signature to validate</div>
    <div class="send">continue & Send</div>
    <div class="txt1">By validating this certificate.</div>
    <div class="txt1">I agree to AccuChain <span class="block">Terms and Condition</span> and <span class="block">Privacy Policy</span></div>
  </div>
</div>
</template>

<script>
import top from '~/components/validation/top'
export default {
  props:[],
  components:{
    top
  },
  data(){
    return{
      certificates:{
        img:'1.png',
        isValidated:true,
        des:'Atheletic Participation Award',
        time:'2015-2016'
      }
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
.cotainer{
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto-Regular,Roboto;
  padding-bottom: 79px;
  .top{
    align-self: flex-start;
    height: 63px;
    display: flex;
    align-items: center;
    padding-left: 40px;
    .back_icon{
      cursor: pointer;
    }
    .avatar{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 0 10px;
    }
    .userinfo{
      font-size: 14px;
      .name{
        color: #122134;
        line-height: 14px;
        display: flex;
        align-items: center;
        .icon{
          margin-left: 4px;
        }
      }
      .email{
        color: #8C95A8;
        line-height: 14px;
        margin-top: 4px;
      }
    }
  }
  .schedule{
    display: flex;
    align-items: center;
    margin-bottom:43px;
    .icon{
      width: 24px;
      height: 24px;
    }
    .line{
      margin: 0 8px;
    }
  }
  .title{
    color: #122134;
    font-size: 20px;
  }
  .certificate_img{
    width: 244px;
    height: 174px;
    background: #ACA092;
    margin-top: 50px;
    margin-bottom: 20px;
    border-radius: 4px;
  }
  .des{
    color: #122134;
    font-size: 16px;
  }
  .time{
    font-size: 14px;
    color: #9BA6BE;
    margin-top: 10px;
    margin-bottom: 9px;
  }
  .signature{
    width: 292px;
    height: 92px;
    margin-bottom: 8px;
  }
  .signature_line{
    width: 400px;
    height: 1px;
    background: #DCDFE6;
    margin-bottom: 16px;
  }
  .signature_txt{
    font-size: 14px;
    color: #9BA6BE;
    margin-bottom: 64px;
  }
  .send{
    padding: 13px 25px;
    background: #3C8BEC;
    color: #fff;
    border-radius:4px;
    margin-bottom: 29px;
    cursor: pointer;
  }
  .txt1{
    font-size: 14px;
    color: #9BA6BE;
    line-height:20px;
    .block{
      color: #122134;
    }
  }
}
@media screen and (max-width: 500px){

}
</style>
