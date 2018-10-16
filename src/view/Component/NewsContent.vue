<template>
  <div>
    <div class="top">
      <img class="top-left" src="../../assets/左.png" @click="back" alt="">
      <div class="top-title">{{title}}</div>
    </div>
    <div class="news-content">
      <div class="content-title">{{content.title}}</div>
      <div class="content-essay" v-html="content.content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewsConnect",
    data(){
      return{
        content:'',
        title:''
      }
    },
    methods:{
      getData(){
        this.title = this.$route.query.title
        this.$axios.get('/hhdj/news/newsContent.do',{newsId:this.$route.query.newsId}).then(res =>{
          this.content = res.data
        })
      }
    },
    created(){
      this.getData()
    }
  }
</script>

<style lang="scss">
  .news-content{
    margin: 0.2rem;
    margin-top: 44px;

    .content-title{
      font-size: 0.4rem;
      text-align: left;
      margin: 0.2rem 0;
    }
    .content-essay{
      font-size: 0.28rem;
      text-align: left;
      line-height: 0.4rem;

      img{
        width: 7rem;
        margin: 0.2rem 0;
      }
    }
  }
</style>
