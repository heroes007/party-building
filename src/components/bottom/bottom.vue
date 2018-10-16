<template>
  <div>
    <router-view/>
    <div class="nav">
      <router-link to="/index" :class="index == 1 ? 'nav-change change-bg1':'nav-content content-bg1'">
        <img class="home-img">
        <div class="home-title">首页</div>
      </router-link>
      <router-link to="/inform" :class="index == 2 ? 'nav-change change-bg2':'nav-content content-bg2'">
        <img class="home-img" alt="">
        <div class="home-title">通知早知道</div>
      </router-link>
      <router-link to="/mine" :class="index == 3 ? 'nav-change change-bg3':'nav-content content-bg3'">
        <img class="home-img" alt="">
        <div class="home-title">我的党建</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bottom",
    data(){
      return{
        index:""
      }
    },
    methods:{
      getData(){
        if(this.$route.path == '/index'){
          this.index = 1
        }else if(this.$route.path == '/inform'){
          this.index = 2
        }else if(this.$route.path == '/mine'){
          this.index = 3
        }
      }
    },
    created(){
      this.getData()
    },
    updated(){
      this.getData()
    }
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

    .content-bg1{
      background: url("../../assets/home/党_grey.png");
      background-repeat: no-repeat;
      background-position-x: center;
      background-size: 0.4rem;
    }
    .change-bg1{
      background: url("../../assets/home/党_red.png");
      background-repeat: no-repeat;
      background-position-x: center;
      background-size: 0.4rem;
    }
    .content-bg2{
      background: url("../../assets/home/消息_grey.png");
      background-repeat: no-repeat;
      background-position-x: center;
      background-size: 0.4rem;
    }
    .change-bg2{
      background: url("../../assets/home/消息_red.png");
      background-repeat: no-repeat;
      background-position-x: center;
      background-size: 0.4rem;
    }
    .content-bg3{
      background: url("../../assets/home/会员_grey.png");
      background-repeat: no-repeat;
      background-position-x: center;
      background-size: 0.4rem;
    }
    .change-bg3{
      background: url("../../assets/home/会员_red.png");
      background-repeat: no-repeat;
      background-position-x: center;
      background-size: 0.4rem;
    }

    .nav-content{
      text-decoration: none;
      font-size: 0.4rem;
      color: #999;
      width: 33.3%;

      .home-img{
        height: 0.4rem;
      }
      .home-title{
        font-size: 0.24rem;
      }
    }
    .nav-change{
      text-decoration: none;
      font-size: 0.4rem;
      color: #ef473a;
      border-top: 1px solid #ef473a;
      width: 33.3%;

      .home-img{
        height: 0.4rem;
      }
      .home-title{
        font-size: 0.24rem;
      }
    }
  }
</style>
