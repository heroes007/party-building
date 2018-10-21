<template>
  <div>
    <Loadmore class="loadMore" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="ready" ref="loadmore">
      <div class="top">
        <img class="top-left" src="../../assets/左.png" @click="back" alt="">
        <div class="top-title">{{this.title}}</div>
      </div>
      <div class="news-main">
        <router-link :to="{path:'/index/news/content', query:{newsId:item.newsId, title:title}}" class="new-content link" v-for="(item, index) in content" :key="index">
          <img class="content-img" :src='item.pic' alt="">
          <div class="content-essay">
            <div class="essay-title">{{item.title}}</div>
            <div class="essay-bottom">
              <div class="bottom-time">{{item.currentTime}}</div>
              <img class="bottom-img" src="../../assets/12-eye.png" alt="">
              <div class="bottom-num">{{item.count}}</div>
            </div>
          </div>
        </router-link>
        <div v-if="isShow" class="news-bottom">没有更多数据了</div>
      </div>
    </Loadmore>
  </div>
</template>

<script>
  import { Loadmore } from 'mint-ui';
  export default {
    name: "News",
    data() {
      return {
        content: [],
        title:'',
        newsData:{
          page:1,
          rows:10,
          type:1
        },
        ready:false,
        total:''
      }
    },
    components:{
      Loadmore
    },
    methods: {
      getData() {
        this.newsData.type = this.$route.query.type
        this.$axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do`,this.newsData).then(res => {
          this.total = res.total
          this.content = [...this.content, ...res.rows]
        })
        this.title = this.$route.query.title
      },
      loadTop(){
        this.getData()
        this.$refs.loadmore.onTopLoaded();
      },
      loadBottom(){
        // if(this.content.length < total){
        //   this.newsData.page += 1
        //   this.$refs.loadmore.onBottomLoaded();
        //   this.getData()
        // }else {
        //   this.ready = true
        // }
        this.newsData.page += 1
        this.$refs.loadmore.onBottomLoaded();
        this.getData()
      },
    },
    created() {
      this.getData()
    },
  }
</script>

<style scoped lang="scss">
  .news-main {
    font-size: 0.4rem;
    margin-top: 0.88rem;

    .new-content{
      display: flex;
      flex-direction: row;
      padding: 0.2rem;
      border-bottom: 0.02rem solid #ccc;

    }
    .content-img{
      height: 1.6rem;
      width: 1.7rem;
    }
    .content-essay{
      display: flex;
      margin: 0 0.12rem;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      .essay-title{
        font-size: 0.32rem;
        text-align: left;
      }
      .essay-bottom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .bottom-time{
          font-size: 10px;
        }
        .bottom-img{
          height: 0.28rem;
          opacity: 0.4;
          margin-right: -2rem;
        }
        .bottom-num{
          font-size: 0.2rem;
        }
      }
    }
  }
  .news-bottom{
    margin: 0.2rem 0;
    font-size: 0.32rem;
    color: #666;
  }
  .loadMore{
    font-size: 20px;
  }
</style>
