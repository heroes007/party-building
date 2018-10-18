<template>
  <div>
    <div class="top">
      <img class="top-left" src="../../assets/左.png" @click="backMine" alt="">
      <div class="top-title">个人信息</div>
      <div class="top-change" @click="edit">编辑</div>
    </div>
    <div  class="userList">
      <div class="userInfo-content">
        <div class="content-title">头像</div>
        <img class="content-img" :src="data.header" alt="">
      </div>
      <div class="userInfo-content">
        <div class="content-title">姓名</div>
        <div class="content-title">{{data.username}}</div>
      </div>
      <div class="userInfo-content">
        <div class="content-title">身份证</div>
        <div class="content-title">{{data.idCard}}</div>
      </div>
      <div class="userInfo-content">
        <div class="content-title">家庭地址</div>
        <div class="content-title">{{data.hometown}}</div>
      </div>
      <div class="userInfo-content">
        <div class="content-title">工作地址</div>
        <div class="content-title">{{data.address}}</div>
      </div>
      <div class="userInfo-content">
        <div class="content-title">民族</div>
        <div class="content-title">{{data.nation}}</div>
      </div>
      <div class="userInfo-content">
        <div class="content-title">微信号</div>
        <div class="content-title">{{data.wxNum}}</div>
      </div>
      <div class="userInfo-content">
        <div class="content-title">qq号</div>
        <div class="content-title">{{data.qqNum}}</div>
      </div>
      <div class="userInfo-content">
        <div class="content-title">性别</div>
        <div class="content-title">{{data.sex == 1 ? '男' : '女'}}</div>
      </div>
      <div class="userInfo-content">
        <div class="content-title">最高学历</div>
        <div class="content-title">{{data.education}}</div>
      </div>
      <div class="userInfo-content">
        <div class="content-title">职称</div>
        <div class="content-title">{{data.jobRank}}</div>
      </div>
      <div class="userInfo-content">
        <div class="content-title">薪资水平</div>
        <div class="content-title">{{data.salary}}</div>
      </div>
      <div class="userInfo-content">
        <div class="content-title">入党时间</div>
        <div class="content-title">{{data.joinPartyTime}}</div>
      </div>
      <div class="userInfo-content">
        <div class="content-title">党费最后缴纳时间</div>
        <div class="content-title">{{data.lastPayTime}}</div>
      </div>
      <div class="userInfo-content">
        <div class="content-title">当前身份</div>
        <div class="content-title">{{data.partyIdentity}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MineInfo",
    data(){
      return{
        data:'',
      }
    },
    methods:{
      getUser(){
        this.$axios.get('/hhdj/user/userInfo.do').then(res => {
          this.data = res.data
        })
      },
      edit(){
        this.$router.push('/mine/user/change')
      },
      backMine(){
        this.$router.push('/mine')
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

    .content-img{
      height: 26px;
    }
  }
</style>
