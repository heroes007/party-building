<template>
  <div>
    <div class="top">
      <img class="top-left" src="../../assets/左.png" @click="this.back" alt="">
      <div class="top-title">修改个人信息</div>
      <div class="top-change" @click="save">保存</div>
    </div>
    <div  class="userList">
      <div class="userInfo-content">
        <div class="content-title">头像</div>
        <div>
          <label class="content-label">
            <input class="content-inputFile" type="file" @change="getimg">
            <img class="content-inputImg" :src="header" >
          </label>
        </div>
      </div>
      <div class="userInfo-content">
        <div class="content-title">姓名</div>
        <input class="content-input" type="text" v-model="data.username">
      </div>
      <div class="userInfo-content">
        <div class="content-title">身份证</div>
        <input class="content-input" type="submit" v-model="idCard">
      </div>
      <div class="userInfo-content">
        <div class="content-title">家庭地址</div>
        <input class="content-input" type="text" v-model="data.hometown">
      </div>
      <div class="userInfo-content">
        <div class="content-title">工作地址</div>
        <input class="content-input" type="text" v-model="data.address">
      </div>
      <div class="userInfo-content">
        <div class="content-title">民族</div>
        <input class="content-input" type="text" v-model="data.nation">
      </div>
      <div class="userInfo-content">
        <div class="content-title">微信号</div>
        <input class="content-input" type="text" v-model="data.wxNum">
      </div>
      <div class="userInfo-content">
        <div class="content-title">qq号</div>
        <input class="content-input" type="text" v-model="data.qqNum">
      </div>
      <div class="userInfo-content">
        <div class="content-title">性别</div>
        <div class="input-sex">
          <input type="radio" name="sex" value=1 :checked="data.sex" v-model="data.sex">
          <span>男</span>
          <input type="radio" name="sex" value=0 :checked="!data.sex" v-model="data.sex">
          <span>女</span>
        </div>
      </div>
      <div class="userInfo-content">
        <div class="content-title">最高学历</div>
        <input class="content-input" type="text" v-model="data.education">
      </div>
      <div class="userInfo-content">
        <div class="content-title">职称</div>
        <input class="content-input" type="text" v-model="data.jobRank">
      </div>
      <div class="userInfo-content">
        <div class="content-title">薪资水平</div>
        <input class="content-input" type="text" v-model="data.salary">
      </div>
      <div class="userInfo-content">
        <div class="content-title">入党时间</div>
        <input class="content-input" type="date" v-model="data.joinPartyTime">
      </div>
      <div class="userInfo-content">
        <div class="content-title">党费最后缴纳时间</div>
        <input class="content-input" type="date" v-model="data.lastPayTime">
      </div>
      <div class="userInfo-content">
        <div class="content-title">当前身份</div>
        <select  v-model="data.partyStatus" class="content-input select">
          <option value = 2 >党员</option>
          <option value = 1 >预备党员</option>
          <option value = 0 >积极分子</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MineInfoChange",
    data(){
      return{
        data:{
          username: '1',
          hometown: '1',
          address: '1',
          nation: '1',
          wxNum: '1',
          qqNum: '1',
          sex: '1',
          education: '1',
          jobRank: '1',
          salary: '1',
          joinPartyTime: '1',
          lastPayTime: '1',
          partyStatus: '1',
          header:'',
        },
        idCard:'',
        header:'',
        imageUrl:'',
        myFile:{
          myFile:''
        },
        store:''
      }
    },
    methods:{
      getUser(){
        this.$axios.get('/hhdj/user/userInfo.do').then(res => {
          this.store = res.data
          this.getValue(res.data)
          this.idCard = res.data.idCard
          this.partyIdentity = res.data.partyIdentity
          this.header = res.data.header
        })
      },
      save(){
        this.$axios.post('/hhdj/user/modifyInfo.do',this.data).then(res => {
          if(res.status == 200){
            this.$router.push('/mine/user')
          }
        })
      },
      getValue(data){
        for(var i in data){
          if(this.data[i]){
            this.data[i] = data[i]
          }
        }
      },
      getimg(event) {
        this.imageUrl = event.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(this.imageUrl);
        const _this = this
        reader.onload = function (e) {
          const imgcode = e.target.result;
          _this.header = imgcode
          _this.store.header = _this.header
          _this.$store.commit('increment',_this.store)
          _this.myFile.myFile = imgcode.split(',')[1]
          _this.$axios.post('/hhdj/image/uploadBase64.do',_this.myFile ).then(res => {
            _this.data.header = res.data.url
          })
        }
      },
    },
    created(){
      this.getUser()
    }
  }
</script>

<style scoped lang="scss">
  .userList{
    margin-top: 0.84rem;
  }
  .userInfo-content{
    height: 1rem;
    border-bottom: 0.02rem solid #ccc;
    padding: 0.2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .content-title{
      font-size: 0.36rem;
    }

    .content-input{
      font-size: 0.36rem;
      text-align: right;
      border: 0;
      outline:none;
      width: 50%;
      background-color: #fff;
    }

    .select{
      width: 100px;
    }

    .content-img{
      height: 0.52rem!important;
      width: 0.52rem!important;
      font-size: 0.4rem;

    }

    .input-sex{
      display: flex;
      align-items: center;
    }

    span{
      font-size: 0.36rem;
      margin: 0 0.12rem;
    }

    .content-label{
      display: block;
      height: 0.48rem;
      width: 0.48rem;
    }
    .content-inputFile{
      display: none;
    }
    .content-inputImg{
      width: 100%;
      height: 100%;
      float: left;
    }
  }
</style>

