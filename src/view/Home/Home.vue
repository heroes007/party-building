<template>
  <div>
    <div class="home">
      <div class="home-top">
        <img src="../../assets/home/logo.png" alt="">
        <a class="top-login" href="#/login" v-if="!store">登录</a>
      </div>
      <div class="centre">
        <div class="centre-swiper">
          <swiper :options="swiperOption">
            <swiper-slide class="swiper-content" v-for="(item, index) in swiper" :key="index">
              <router-link :to="{path:'/index/slide', query:{newId:item.url}}">
                <img class="swiper-img" :src="item.imgUrl" alt="">
                <div class="swiper-title">{{item.title}}</div>
              </router-link>
            </swiper-slide>
            <div class="swiper-scrollbar"></div>
            <div class="swiper-pagination"></div>
          </swiper>
        </div>
        <div class="centre-icon">
          <div class="icon-contnet">
            <router-link :to="{path:'/index/news', query:{type:0,title:'信工新闻眼'}}" class="link route-link">
              <img src="../../assets/home/icon_01@2x.png" alt="">
              <div>信工新闻眼</div>
            </router-link>
            <router-link to="/index/mobile" class="link route-link">
              <img src="../../assets/home/icon_02@2x.png" alt="">
              <div>掌上组织生活</div>
            </router-link>
            <router-link :to="store ? '/index/comment' :'/login'" class="link route-link">
              <img src="../../assets/home/icon_03@2x.png" alt="">
              <div>党员互动</div>
            </router-link>
          </div>
          <div class="icon-contnet">
            <router-link :to="{path:'/index/news', query:{type:'3', title:'党政一点通'}}" class="link route-link">
              <img src="../../assets/home/icon_04@2x.png" alt="">
              <div>党政一点通</div>
            </router-link>
            <router-link :to="{path:'/index/news', query:{type:'5', title:'党员亮身份'}}" class="link route-link">
              <img src="../../assets/home/icon_05@2x.png" alt="">
              <div>党员亮身份</div>
            </router-link>
            <router-link to="/index/history" class="link route-link">
              <img src="../../assets/home/icon_06@2x.png" alt="">
              <div>党史上的今天</div>
            </router-link>
          </div>
        </div>
        <div class="centre-logo">
          <img src="../../assets/home/banner01@2x.png" alt="">
        </div>
        <div class="centre-table">
          <div class="table-study"></div>
          <div class="table-study">
            <router-link :to="{path:'/index/news', query:{type:'6', title:'随时随地学'}}" class="link">
              <div class="table-sun"></div>
            </router-link>
            <router-link :to="{path:'/index/news', query:{type:'4', title:'制度建设'}}" class="link">
              <div class="table-sun"></div>
            </router-link>
          </div>
          <div class="table-study">
            <router-link to="/index/photo" class="link">
              <div class="table-sun"></div>
            </router-link>
            <router-link :to="{path:'/index/news', query:{type:'1', title:'特色活动'}}" class="link">
              <div class="table-sun"></div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import axios from 'axios'


  export default {
    name: "Home",
    data() {
      return {
        swiperOption: {//swiper3
          speed: 1000,
          autoplay:true,
        },
        swiper:[],
        store:'',
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    methods:{
      getSwiper(){
        axios.get('http://211.67.177.56:8080/hhdj/carousel/carouselList.do?type=0').then(res =>{
          this.swiper = res.data.rows
        })
      },
      getStore(){
        this.store = this.$store.state.userInfo
      }
    },
    created(){
      this.getSwiper(),
      this.getStore()
    }
  }
</script>

<style scoped lang="scss">
  .home{
    margin-bottom: 0.92rem;
  }
  //头部样式
  .home-top {
    background-color: #c50206;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.08rem;

    .top-login {
      text-decoration: none;
      font-size: 0.36rem;
      color: #ddd;
      margin-right: 0.08rem;
    }
  }

  //中间部分样式
  .centre {
    .centre-swiper{
      .swiper-content{
        height: 3.75rem;
      }
      .swiper-img{
        width: 100%;
      }

      .swiper-title{
        text-align: left;
        padding-left: 0.08rem;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        font-size: 0.24rem;
        color: #fff;
        line-height: 0.4rem;
        background: rgba(0, 0, 0, .5);
      }
    }

    .centre-icon {
      height: 3.94rem;
      background-image: url("../../assets/home/bt_bg@2x.png");
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .icon-contnet {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-size: 0.2rem;

        .route-link{
          width: 100px;
        }

        img {
          height: 1rem;
        }
      }
    }
    .centre-logo {
      height: 1.8rem;
      img {
        height: 1.8rem;
      }
    }
    .centre-table {
      height: 3.3rem;
      background-image: url("../../assets/home/channelType@2x.png");
      background-repeat: no-repeat;
      background-size: cover;

      .table-study {
        height: 100%;
        width: 33.33333%;
        float: left;

        .table-sun {
          height: 50%;
          width: 100%;
        }
      }
    }
  }

  //底部样式
  .bottom {
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .nav-home {
    width: 33.3333%;
    font-size: 2.4rem;

    img {
      height: 4.8rem;
    }
  }
</style>
