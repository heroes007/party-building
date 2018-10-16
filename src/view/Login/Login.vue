<template>
  <div class="login">
    <div class="login-top">
      <img class="top-img" src="../../assets/左.png" alt="" v-on:click="this.back">
      <div class="top-title" >登录</div>
    </div>
    <div class="login-content">
      <img class="content-img" src="../../assets/home/logo.png" alt="">
      <input class="content-input" type="text" placeholder="身份证号">
      <input class="content-input" type="text" placeholder="密码">
      <button class="content-btn">登录</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    methods:{
    }
  }
</script>

<style scoped lang="scss">
  .login{
    height: 100vh;
    background-color: #c50206;
  }
  .login-top{
    height: 0.86rem;
    background-color: #c50206;
    padding: 0.2rem;

    .top-img{
      height: 0.4rem;
      float: left;
      margin-right: -0.4rem;
    }
    .top-title{
      color: #fff;
      font-size: 0.36rem;
    }
  }
  .login-content{
    display: flex;
    flex-direction: column;
    align-items: center;

    .content-img{
      width: 4rem;
      margin-top: 0.8rem;
    }
    .content-input{
      width: 6rem;
      height: 0.8rem;
      border-radius: 0.12rem;
      margin-top: 0.4rem;
      border: 0.02rem solid #ff0;
      background-color: #c50206;
      color: #fff;
      font-size: 0.32rem;
      padding-left: 0.08rem;
    }
    .content-input::-webkit-input-placeholder{
      color: #fff;

    }

    .content-btn{
      width: 6rem;
      height: 0.8rem;
      border-radius: 0.12rem;
      margin-top: 0.4rem;
      background-color: #e3574f;
      color: #fff;
      border: 0;
    }
  }
</style>
