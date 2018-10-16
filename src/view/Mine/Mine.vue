<template>
  <div>
    <div class="mine-top">我的党建</div>
    <div class="mine-login">
      <img class="login-img" src="../../assets/bt_bg.png" alt="">
      <router-link to="/login" class="login-hint">你还没有登录，请登录</router-link>
    </div>
    <ul>
      <li class="mine-list">
        <img class="list-icon" src="../../assets/person.png" alt="">
        <div class="list-title">个人信息</div>
        <img class="list-img" src="../../assets/right.png" alt="">
      </li>
      <li class="mine-list">
        <img class="list-icon" src="../../assets/lxjf.png" alt="">
        <div class="list-title">个人量化积分</div>
        <img class="list-img" src="../../assets/right.png" alt="">
      </li>
      <li class="mine-list">
        <img class="list-icon" src="../../assets/xgmm.png" alt="">
        <div class="list-title">修改密码</div>
        <img class="list-img" src="../../assets/right.png" alt="">
      </li>
      <li class="mine-list">
        <img class="list-icon" src="../../assets/icon3.png" alt="">
        <div class="list-title">党费缴纳</div>
        <img class="list-img" src="../../assets/right.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "mine",
    components:{
    }
  }
</script>

<style scoped lang="scss">
  .mine-top{
    height: 43px;
    background-color: #c50206;
    color: #fff;
    font-size: 18px;
    line-height: 43px;
  }
  .mine-login{
    height: 200px;
    background-color: #c50206;
    display: flex;
    flex-direction: column;
    align-items: center;

    .login-img{
      height: 68px;
      width: 68px;
      border-radius: 50%;
      margin-top: 40px;
    }
    .login-hint{
      text-decoration: none;
      font-size: 16px;
      margin-top: 20px;
      color: #fff;
    }
  }
  .mine-list{
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #ccc;

    .list-icon{
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
    .list-title{
      font-size: 18px;
    }
    .list-img{
      height: 18px;
      position: fixed;
      right: 10px;
    }
  }
</style>
