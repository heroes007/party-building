<template>
  <div class="login">
    <div class="login-top">登录</div>
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
        name: "Login"
    }
</script>

<style scoped lang="scss">
  .login{
    height: 100vh;
    background-color: #c50206;

  }
  .login-top{
    height: 43px;
    background-color: #c50206;
    color: #fff;
    font-size: 18px;
    line-height: 43px;
  }
  .login-content{
    display: flex;
    flex-direction: column;
    align-items: center;

    .content-img{
      width: 200px;
      margin-top: 40px;
    }
    .content-input{
      width: 300px;
      height: 40px;
      border-radius: 6px;
      margin-top: 20px;
      border: 1px solid #ff0;
      background-color: #c50206;
      color: #fff;
      font-size: 16px;
      padding-left: 4px;
    }
    .content-input::-webkit-input-placeholder{
      color: #fff;

    }

    .content-btn{
      width: 300px;
      height: 40px;
      border-radius: 6px;
      margin-top: 20px;
      background-color: #e3574f;
      color: #fff;
      border: 0;
    }
  }
</style>
