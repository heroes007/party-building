<template>
  <div>
    <div class="mine-top">我的党建</div>
    <div class="mine-login" v-if='!userInfo'>
      <img class="login-img" src="../../assets/bt_bg.png" alt="">
      <router-link to="/login" class="login-hint">你还没有登录，请登录</router-link>
    </div>
    <div class="mine-login" v-else>
      <img class="login-img" :src="userInfo.header" alt="">
      <router-link to="/login" class="login-hint">{{userInfo.username}}</router-link>
      <button class="outBtn" @click="outBtn">退出登录</button>
    </div>
    <ul>
      <router-link :to="userInfo ? '/mine/user' : 'login'" class="mine-list">
        <img class="list-icon" src="../../assets/person.png" alt="">
        <div class="list-title">个人信息</div>
        <img class="list-img" src="../../assets/right.png" alt="">
      </router-link>
      <router-link :to="userInfo ? '/mine/integral' : 'login'" class="mine-list">
        <img class="list-icon" src="../../assets/lxjf.png" alt="">
        <div class="list-title">个人量化积分</div>
        <img class="list-img" src="../../assets/right.png" alt="">
      </router-link>
      <router-link :to="userInfo ? '/mine/password' : 'login'" class="mine-list">
        <img class="list-icon" src="../../assets/xgmm.png" alt="">
        <div class="list-title">修改密码</div>
        <img class="list-img" src="../../assets/right.png" alt="">
      </router-link>
      <router-link :to="userInfo ? '/mine/cost' : 'login'" class="mine-list">
        <img class="list-icon" src="../../assets/icon3.png" alt="">
        <div class="list-title">党费缴纳</div>
        <img class="list-img" src="../../assets/right.png" alt="">
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "mine",
    data(){
      return{
        userInfo:''
      }
    },
    methods:{
      getInfo(){
        this.userInfo = this.$store.state.userInfo
      },
      outBtn(){
        this.$store.commit('increment','')
        this.getInfo()
      }
    },
    created(){
      this.getInfo()
    },
  }
</script>

<style scoped lang="scss">
  .mine-top{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.86rem;
    background-color: #c50206;
    color: #fff;
    font-size: 0.36rem;
    line-height: 0.86;
  }
  .mine-login{
    height: 4rem;
    background-color: #c50206;
    display: flex;
    flex-direction: column;
    align-items: center;

    .login-img{
      height: 1.36rem;
      width: 1.36rem;
      border-radius: 50%;
      margin-top: 0.8rem;
    }
    .login-hint{
      text-decoration: none;
      font-size: 0.32rem;
      margin-top: 0.4rem;
      color: #fff;
    }
  }
  .mine-list{
    padding: 0.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 0.02rem solid #ccc;
    text-decoration: none;

    .list-icon{
      width: 0.6rem;
      height: 0.6rem;
      margin-right: 0.2rem;
    }
    .list-title{
      font-size: 0.36rem;
      color: #666;
    }
    .list-img{
      height: 0.36rem;
      position: fixed;
      right: 0.2rem;
    }
  }
  .outBtn{
    width: 7.2rem;
    height: 0.9rem;
    position: absolute;
    top: 9.6rem;
    color: #eee;
    background-color: #ef473a;
    border: 0;
    border-radius: 0.08rem;
    font-size: 0.32rem;
  }
</style>
