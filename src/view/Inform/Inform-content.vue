<template>
  <div>
    <div class="top">
      <img class="top-left" src="../../assets/左.png" v-on:click="this.back" alt="">
      <div class="top-title">通知早知道</div>
    </div>
    <div class="content">
      <div class="content-title">{{content.title}}</div>
      <div class="content-essay" v-html="content.content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "inform-content",
    data(){
      return{
        newsId:'',
        content:''
      }
    },
    methods:{
      getData(){
        this.newsId = this.$route.query.newsId
        this.$axios.get('/hhdj/news/newsContent.do',{newsId:this.newsId}).then(res => {
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
  .content{
    padding: 0.2rem;

    .content-title{
      margin: 0.2rem 0;
      font-size: 0.48rem;
      text-align: left;
    }
    .content-essay{
      font-size: 0.32rem;
      text-align: left;

      span{
        font-size: 0.28rem !important;

      }

      img{
        width: 7rem;
      }
    }
  }
</style>
