<template>
<div class="box">
  <div class="area" ref="select_frame" v-if="!analysis">
    <img src="~/assets/img/Main/upload.svg" alt="" class="icon">
    <div class="des1">Drag & Drop files here</div>
    <div class="des2">or</div>
    <div class="des3" @click="chooseFile">Browse Files</div>
  </div>
  <div class="area area2" v-else-if="analysis&&data.analyzing">
    <div class="img_box">
      <img :src="fileContent" alt="" class="img">
      <div class="scan"></div>
      <div class="percent">{{percent}}%</div>
      <div class="horn">
        <div class="lt"></div>
        <div class="rt"></div>
        <div class="rb"></div>
        <div class="lb"></div>
     </div>
    </div>
  </div>
  <div class="area area3" v-else-if="analysis&&!data.analyzing">
    <img :src="fileContent" alt="" class="img">
    <div class="score">
      <div class="title">TRUST SCORE</div>
      <div class="percent">{{data.percent}}%</div>
    </div>
  </div>
  <div v-if="!analysis" class="isanalysis"></div>
  <div v-if="analysis&&data.analyzing" class="isanalysis">Analyzing certificate for image manipulation</div>
  <div v-else-if="analysis&&!data.analyzing" class="isanalysis">No image manipulation detected</div>
  <div class="submit" @click="next">Continue</div>
  <input type="file" id="file" style="display: none;" accept="image/*" @change="fileInfo(getFileContent)">
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
      type:'',
      fileList: [],
      fileContent:'',
      analysis:false,
      percent:0,
      interval:null,
      data:{
        analyzing:false,
        percent:null
      }
    }
  },
  mounted(){
     this.$refs.select_frame.ondragleave = (e) => {
      e.preventDefault();  //阻止离开时的浏览器默认行为
    };
    this.$refs.select_frame.ondrop = (e) => {
      e.preventDefault();    //阻止拖放后的浏览器默认行为
      const data = e.dataTransfer.files;  // 获取文件对象
      if (data.length < 1) {
        return;  // 检测是否有文件拖拽到页面     
      }
      // console.log(e.dataTransfer.files);
      const formData = new FormData();
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        // console.log(e.dataTransfer.files[i]);
        if (e.dataTransfer.files[i].type.indexOf('image') === -1) {
          alert('Only upload image files');
          return;
        }
        formData.append('uploadfile', e.dataTransfer.files[i], e.dataTransfer.files[i].name);
        let reader = new FileReader()
        reader.readAsDataURL(e.dataTransfer.files[i])
        reader.onload = (e)=> {
          let fileContent = e.target.result
          this.getFileContent(fileContent)
        }
      }
      this.fileList=[]
      this.fileList = this.fileList.concat(e.dataTransfer.files[0]);
    };
    this.$refs.select_frame.ondragenter = (e) => {
      e.preventDefault();  //阻止拖入时的浏览器默认行为
    };
    this.$refs.select_frame.ondragover = (e) => {
      e.preventDefault();    //阻止拖来拖去的浏览器默认行为
    };
  },
  watch:{
    fileContent(){
      if(this.interval){
        clearInterval(this.interval)
      }
      this.data.analyzing=true
      if(!this.analysis){
        this.analysis=true
        this.percent=0
        this.interval=setInterval(()=>{
          this.percent=this.percent+20
          if(this.percent>=100){
            clearInterval(this.interval)
            this.data.analyzing=false
            this.data.percent=95
          }
        },1000)
      }
    }
  },
  methods:{
    chooseFile(){
      let input = document.getElementById('file')
      input.click()
    },
    fileInfo(){
      let resultFile = document.getElementById('file').files[0]
      // 如果文件存在
      if (resultFile) {
          // 获取文件信息
          this.file = resultFile
          // 获取文件名
          this.fileName = resultFile.name
          // 使用 FileReader 来读取文件
          let reader = new FileReader()
          // 读取纯文本文件,且编码格式为 utf-8
          reader.readAsDataURL(resultFile)
          // 读取文件,会触发 onload 异步事件,可使用回调函数 来获取最终的值.
          reader.onload = (e)=> {
              let fileContent = e.target.result
              this.getFileContent(fileContent)
          }
      }
    },
    getFileContent (fileContent) {
      this.fileContent = fileContent
    },
    next(){
      // if(!this.data.percent){
      //   alert('Please upload the picture first')
      //   return
      // }
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
  align-items: center;
  .area{
    background: #F7FAFD;
    width: 420px;
    height: 236px;
    border: 2px #DCDFE6 dashed;
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      margin-top: 52px;
    }
    .des1,.des2{
      color: #8C95A8;
      font-family:Roboto-Regular,Roboto;
    }
    .des1{
      margin-top: 20px;
    }
    .des2{
      margin: 10px 0;
    }
    .des3{
      color: #3C8BEC;
      font-family:Roboto-Medium,Roboto;
      cursor: pointer;
    }
  }
  .area2{
    background: rgba(0,0,0,0.3);
    .img_box{
      width: 286px;
      height: 204px;
      top: 50%;
      left: 0;
      transform: translate(0,-50%);
      position: relative;
      .img{
        width: 100%;
        height: 100%;
        margin-top: 0;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 4px;
      }
      .horn{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border:2px solid #ACA092;
      }
      .horn>div{
        width: 34px;
        height: 34px;
        position:absolute;
      }
      .horn .lt{
        border-top: 2px solid #75FAFC;
        border-left: 2px solid #75FAFC;
        left: -4px;
        top: -4px;
        border-top-left-radius: 4px;
      }
      .horn .rt{
        border-top: 2px solid #75FAFC;
        border-right: 2px solid #75FAFC;
        right: -4px;
        top: -4px;
        border-top-right-radius: 4px;
      }
      .horn .rb{
        border-bottom:2px solid #75FAFC;
        border-right: 2px solid #75FAFC;
        right: -4px;
        bottom: -4px;
        border-bottom-right-radius: 4px;
      }
      .horn .lb{
        border-bottom:2px solid #75FAFC;
        border-left: 2px solid #75FAFC;
        left: -4px;
        bottom: -4px;
        border-bottom-left-radius: 4px;
      }
      .scan{
        width: 224px;
        height: 36px;
        position: absolute;
        top: 59px;
        left: 31px;
        background:linear-gradient(180deg,rgba(117,250,252,0.5) 0%,rgba(117,250,252,0) 100%);
        border-radius:0px 0px 13px 13px;
        opacity:0.8;
        filter:blur(2px);
      }
      .percent{
        position: absolute;
        font-size: 32px;
        color: #75FAFC;
        font-family:Roboto-BlackItalic,Roboto;
        top: 71px;
        width: 100%;
        text-align: center;
      }
    }
  }
  .isanalysis{
    position: relative;
    margin-top: 16px;
    left: 0;
    color: #122134;
    font-size: 14px;
  }
  .area3{
    .img{
      width: 244px;
      height: 174px;
      margin-top: 16px;
      margin-bottom: 6px;
    }
    .score{
      display: flex;
      height: 32px;
      align-items: center;
      .title{
        color: #9BA6BE;
        font-size: 14px;
        margin-right: 6px;
        font-family:PingFangSC-Regular,PingFang SC;
      }
      .percent{
        color: #3C8BEC;
        font-size: 32px;
        font-family:Roboto-BlackItalic,Roboto;
      }
    }
  }
  .submit{
    background: #9DC5F5;
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
