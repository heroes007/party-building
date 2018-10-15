<template>
  <div>
    <div class="inform-top">通知早知道</div>
    <div class="inform-content" v-for="item in message">
      <img class="content-img" src="../../assets/iconfont_gonggaotongzhi.png" alt="">
      <div class="content-message">
        <div class="message-title">{{item.title}}</div>
        <div class="message-time">{{item.currentTime}}</div>
      </div>
    </div>
    <div class="inform-end">没有数据了</div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Inform",
    data() {
      return {
        message:[]
      }
    },
    methods:{
      getData(){
        axios.get('http://211.67.177.56:8080/hhdj/news/newsList.do?page=1&rows=10&type=2').then(res => {
          this.message = res.data.rows
          console.log(this.message)
        })
      }
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

    .content-img{
      height: 40px;
      margin: 0 14px;
    }

    .content-message{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .message-title{
        font-size: 16px;
      }
      .message-time{
        font-size: 14px;
      }
    }
  }
  .inform-end{
    font-size: 16px;
    color: #999;
  }
</style>
