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
    height: 43px;
    background-color: #c50206;
    color: #fff;
    font-size: 18px;
    line-height: 43px;
  }
  .inform-content{
    height: 80px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #ccc;
    text-decoration: none;
    color: #000;

    .content-img{
      height: 36px;
      width: 46px;
      margin: 0 14px;
    }

    .content-message{
      display: flex;
      flex-direction: column;


      .message-title{
        font-size: 16px;
        text-align: left;
      }
      .message-time{
        font-size: 14px;
        text-align: left;
        margin-top: 10px;
      }
    }
  }
  .inform-end{
    font-size: 16px;
    color: #999;
    margin-top: 10px;
  }
</style>
