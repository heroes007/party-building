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
        <inputUpload class="content-img" :inputImg="header" v-on:childrenUrl="childrenUrl"></inputUpload>
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
        <input class="content-input" type="text" v-model="data.joinPartyTime">
      </div>
      <div class="userInfo-content">
        <div class="content-title">党费最后缴纳时间</div>
        <input class="content-input" type="text" v-model="data.lastPayTime">
      </div>
      <div class="userInfo-content">
        <div class="content-title">当前身份</div>
        <input class="content-input" type="text" v-model="partyIdentity">
      </div>
    </div>
  </div>
</template>

<script>
  import inputUpload from '../../components/input/input'

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
        },
        partyIdentity:'',
        idCard:'',
        header:''
      }
    },
    components:{
      inputUpload
    },
    methods:{
      getUser(){
        this.$axios.get('/hhdj/user/userInfo.do').then(res => {
          console.log(res.data)
          this.getValue(res.data)
          this.idCard = res.data.idCard
          this.partyIdentity = res.data.partyIdentity
          this.header = res.data.header
        })
      },
      save(){
        console.log(this.data)
        this.$axios.post('/hhdj/user/modifyInfo.do',this.data).then(res => {
          if(res.status == 200){
            console.log(res)
            this.$router.push('/mine/user')
          }
        })
      },
      childrenUrl(inputImg){
        this.data.header = inputImg
        console.log(this.data.header)
      },
      getValue(data){
        for(var i in data){
          if(this.data[i]){
            this.data[i] = data[i]
          }
        }
      }
    },
    created(){
      this.getUser()
    }
  }
</script>

<style scoped lang="scss">
  .userList{
    margin-top: 42px;
  }
  .userInfo-content{
    height: 50px;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .content-title{
      font-size: 18px;
    }

    .content-input{
      font-size: 18px;
      text-align: right;
      border: 0;
      outline:none;
      width: 50%;
      background-color: #fff;
    }

    .content-img{
      height: 26px!important;
      width: 26px!important;
      font-size: 20px;

    }

    .input-sex{
      display: flex;
      align-items: center;
    }

    span{
      font-size: 18px;
      margin: 0 6px;
    }
  }
</style>

