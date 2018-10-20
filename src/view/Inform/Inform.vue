<template>
  <div>
    <div class="inform-top">通知早知道</div>
    <router-link :to="{path:'/inform/content', query:{newsId:item.newsId}}" class="inform-content" v-for="(item, index) in message" :key="index">
      <img class="content-img" src="../../assets/iconfont_gonggaotongzhi.png" alt="">
      <div class="content-message">
        <div class="message-title">{{item.title}}</div>
        <div class="message-time">{{item.currentTime}}</div>
      </div>
    </router-link>
    <div class="inform-end">没有数据了</div>
  </div>
</template>

<script>
  export default {
    name: "Inform",
    data() {
      return {
        message:[]
      }
    },
    methods:{
      getData(){
        this.$axios.get('/hhdj/news/newsList.do?page=1&rows=10&type=2').then(res => {
          this.message = res.rows
        })
      },
    },
    created(){
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .inform-top{
    height: 0.83rem;
    background-color: #c50206;
    color: #fff;
    font-size: 0.36rem;
    line-height: 0.86rem;
  }
  .inform-content{
    height: 1.6rem;
    padding: 0.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 0.02rem solid #ccc;
    text-decoration: none;
    color: #000;

    .content-img{
      height: 0.72rem;
      width: 0.92rem;
      margin: 0 0.28rem;
    }

    .content-message{
      display: flex;
      flex-direction: column;


      .message-title{
        font-size: 0.32rem;
        text-align: left;
      }
      .message-time{
        font-size: 0.28rem;
        text-align: left;
        margin-top: 0.2rem;
      }
    }
  }
  .inform-end{
    font-size: 0.32rem;
    color: #999;
    margin-top: 0.2rem;
  }
</style>
