<template>
<div class="box">
  <div class="item">
    <div class="title">Achievement Description</div>
    <textarea name="1" id="1" cols="30" rows="10" class="input input1"></textarea>
    <!-- <div class="input"></div> -->
  </div>
  <div class="item">
    <div class="title">Achievement Date</div>
    <el-date-picker
      v-model="date"
      type="date"
      format="dd MMM yyyy"
      placeholder="Pick a day"
      class="input"
      popper-class="input">
    </el-date-picker>
  </div>
  <div class="item">
    <div class="title">Achievement Type</div>
    <el-select v-model="type" filterable placeholder="" class="input input2" popper-class="select">
      <el-option
        v-for="(item,index) in options"
        :key="index"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
  </div>
  <div class="item">
    <div class="title">Organization</div>
    <input type="text" class="input">
  </div>
  <div class="item">
    <div class="title">Location</div>
    <input type="text" class="input">
  </div>
  <div class="submit" @click="next">Continue</div>
</div>
</template>

<script>
export default {
  props:['continues'],
  components: {
  },
  data(){
    return{
      date:'',
      options:['Academics'],
      type:''
    }
  },
  methods:{
    next(){
      this.$emit('continues')
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
      /deep/.el-input__inner{
        width: 100%;
        height: 100%;
        line-height: 100%;
        border: none;
        // padding-left: 0;
        // padding-right: 0;
      }
      /deep/.el-input{
        height: 100%;
      }
      /deep/.el-select{
        height: 100%;
        .el-input{
          overflow: hidden;
          height: 100%;
          .el-input__inner{
            color: #122134;
            height: 40px;
            line-height: 40px;
            padding-right: 0;
            padding-left: 0;
          }
          .el-select__caret{
            position: relative;
            top: 0;
            width: 8px;
            height: 6px;
            background: url('~assets/img/Main/↓.svg') no-repeat;
            background-size: contain;
            overflow: visible;
          }
          .el-select__caret.is-reverse{
            transform: rotate(180deg);
          }
          .el-input__icon{
            line-height: 28px;
            height: 100%;
            transform: rotate(0deg);
          }
        }
      }
    }
    .input1{
      height: 58px;
      padding: 10px 15px;
    }
    .input2{
      padding-left: 0;
      width: 405px;
      /deep/.el-input__inner{
        width: calc(100% + 15px);
        height: 100%;
        line-height: 100%;
        border: none;
        padding-left: 15px;
        padding-right: 0;
      }
      /deep/.el-input__suffix{
        .el-input__suffix-inner{
          width: 8px;
          height: 6px;
          top: 50%;
          position: relative;
          display: block;
          transform: translate(0,-50%);
        }
        .el-select__caret{
          position: relative;
          width: 8px;
          height: 6px;
          background: url('~assets/img/Main/↓.svg') no-repeat;
          background-size: contain;
          overflow: visible;
          transform: rotate(0);
        }
        .el-select__caret.is-reverse{
          transform: rotate(180deg);
        }
        .el-select__caret:before{
          display: none;
        }
      }
    }
  }
  .submit{
    background: #3C8BEC;
    color: #fff;
    width: 320px;
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
