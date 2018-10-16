<template>
  <div>
    <div class="top">
      <img class="top-left" src="../../assets/左.png" @click="this.back" alt="">
      <div class="top-title">随时随地学</div>
    </div>
    <div class="slide-content">
      <div class="content-title">{{content.title}}</div>
      <div class="content-essay" v-html="content.content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Slide",
    data(){
      return{
        content:''
      }
    },
    methods: {
      getData() {
        this.$axios.get('/hhdj/news/newsContent.do', {newsId: this.$route.query.newId}).then(res => {
          console.log(res)
          this.content = res.data
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style lang="scss">
  .slide-content{
    margin: 0.2rem;
    font-size: 0.4rem;
    text-align: left;

    .content-title{
      font-size: 0.44rem;
    }

    .content-essay{
      margin: 0.2rem 0;

      h4{
        font-size: 0.36rem;
        font-weight: normal;
      }

      img{
        width: 100%;
      }
    }
  }
</style>
