<template>
<div class="box">
  <div class="item">
    <div class="input">
      <img src="~/assets/img/Main/search.svg" alt="" class="search_icon">
      <input type="text" class="search_input" placeholder="Search validators by name or email" 
      v-model="searchValue" @focus="input_focus" @blur="input_bulr">
      <div class="search_box" v-if="searchData.length>0&&inputFocus">
        <div class="item" v-for="(item,index) in searchData" :key="index" @click="select(item)">
          <img :src="`/avatar/${item.img}.png`" alt="" class="img">
          <div class="baseinfo">
            <div class="name">{{item.name}}</div>
            <div class="email">{{item.email}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="item">
    <div class="title title1">Added Validator</div>
    <div class="input input1">
      <div v-if="validator!=null" class="info_box">
        <img :src="`/avatar/${validator.img}.png`" alt="" class="img">
        <div class="baseinfo">
          <div class="name">{{validator.name}}</div>
          <div class="email">{{validator.email}}</div>
        </div>
        <div class="delete" @click="deleteValidator">
          <img src="~/assets/img/Main/delete.svg" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="item">
    <div class="title">Personal Message</div>
    <textarea name="1" id="1" cols="30" rows="10" class="input input2"></textarea>
  </div>
  <div class="submit" @click="next">Continue</div>
</div>
</template>

<script>
export default {
  props:['continues'],
  components: {
  },
  watch:{
    searchValue(){
      this.searchData=[]
      var searchData=[]
      // if(this.searchValue.length==0) return
      for(let i=0;i<this.member.length;i++){
        if(this.member[i].name.slice(0,this.searchValue.length).toLowerCase()==this.searchValue.toLowerCase()){
          searchData.push(this.member[i])
        }
        else if(this.member[i].email.slice(0,this.searchValue.length).toLowerCase()==this.searchValue.toLowerCase()){
          searchData.push(this.member[i])
        }
      }
      this.searchData=searchData
    }
  },
  data(){
    return{
      searchValue:'',
      inputFocus:false,
      member:[{
        name:'Robert William',
        email:'rwilliam@westdaleschool.org',
        img:'Robert William',
      },{
        name:'Diana Barber',
        email:'diana.barber@westdaleschool.org',
        img:'S-John Appleseed',
      }],
      searchData:[],
      validator:null
    }
  },
  methods:{
    select(item){
      this.validator=item
    },
    deleteValidator(){
      this.validator=null
    },
    input_focus(){
      this.inputFocus=true
      if(this.searchValue.length==0){
        this.searchData=this.member
      }
    },
    input_bulr(){
      setTimeout(()=>{
        this.inputFocus=false
      },100)
    },
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
      top: 6px;
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
      display: flex;
      align-items: center;
      .search_icon{
        flex-shrink: 0;
      }
      .search_input{
        width: 100%;
        height: 100%;
        padding: 0 10px;
        font-size: 14px;
      }
      .search_box{
        position: absolute;
        width: 100%;
        top: 42px;
        left: 0;
        border-left: 1px #DCDFE6 solid;
        border-right: 1px #DCDFE6 solid;
        border-bottom: 1px #DCDFE6 solid;
        z-index: 2;
        max-height: 120px;
        overflow-y: auto;
        .item{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          background: #fff;
          cursor: pointer;
          .img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
          }
          .baseinfo{
            font-size: 14px;
            .name{
              color: #122134;
            }
            .email{
              color: #8C95A8;
            }
          }
        }
        .item:hover{
          background: rgb(244,245,248);
        }
      }
    }
    .title1{
      top: 22px;
    }
    .input1{
      width: 420px;
      border: none;
      margin: 16px 0 32px 0;
      padding: 0;
      .info_box{
        display: flex;
        align-items: center;
        justify-content: space-between;
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
        .delete{
          width: 100%;
          min-width: 16px;
          cursor: pointer;
          img{
            float: right;
            margin-right: 15px;
          }
        }
      }
    }
    .input2{
      height: 118px;
      padding: 10px 15px;
      font-family:Roboto-Italic,Roboto;
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

}
}
</style>
