<template>
  <div>
    <Header title="个人总结"></Header>
    <div class="content">
      <img class="content-img" :src="item" alt="" v-for="item in data">
      <label class="content-label">
        <input type="file" class="content-input" @change="add">
        <img class="content-img" src="../../assets/upload.png" alt="">
      </label>
    </div>
    <div class="bottom">
      <button class="btn" @click="submit">提交审核</button>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/top/top'
  export default {
    name: "Person",
    data() {
      return {
        data: [],
        formData:{
          myFile:''
        }
      }
    },
    components: {
      Header
    },
    methods: {
      add(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        var _this = this
        reader.onload = function (e) {
          var imgcode = e.target.result;
          _this.formData.myFile = imgcode.split(',')[1];
          _this.data.push(imgcode)
        }
      },
      submit(){
        this.$axios.post('/hhdj/image/uploadBase64.do',this.formData).then(res => {
          console.log(res)
          if(res.status == 200){
            this.data = ''
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .content{
    margin-top: 1.2rem;
  }
  .content-label{
    height: 2.4rem;
    width: 2.4rem;
    display: block;
    float: left;
  }
  .content-input{
    height: 2.4rem;
    width: 2.4rem;
    display: none;
  }
  .content-img{
    height: 2.1rem;
    width: 2.1rem;
    float: left;
    margin: 0.2rem;
  }
  .btn{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 100px;
    width: 100%;
    height: 0.88rem;
    background-color: #ef473a;
    color: #fff;
    border: 0;
    border-radius: 0.08rem;
  }
</style>
