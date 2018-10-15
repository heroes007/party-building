<template>
  <div>
    <router-view/>
    <div class="nav">
      <a href="#/index" class="nav-content">
        <img class="home-img" src="../../assets/home/党_grey.png" alt="">
        <div class="home-title">首页</div>
      </a>
      <a href="#/inform" class="nav-content">
        <img class="home-img" src="../../assets/home/消息_grey.png" alt="">
        <div class="home-title">通知早知道</div>
      </a>
      <a href="#/mine" class="nav-content">
        <img class="home-img" src="../../assets/home/会员_grey.png" alt="">
        <div class="home-title">我的党建</div>
      </a>
    </div>
  </div>

</template>

<script>
  export default {
    name: "bottom"
  }
</script>

<style scoped lang="scss">
  .nav{
    height: 0.92rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;

    .nav-content{
      text-decoration: none;
      font-size: 0.4rem;
      color: #999;

      .home-img{
        height: 0.4rem;
      }
      .home-title{
        font-size: 0.24rem;
      }

    }
  }
</style>
