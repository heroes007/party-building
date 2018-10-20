<template>
    <div>
      <Header title="随时随地拍"></Header>
      <div class="content">
        <div class="content-box" v-for="item in data">
          <img class="box-img" :src="item.pic" alt="">
          <div class="box-title">{{item.title}}</div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../../components/top/top'
  export default {
    name: "photo",
    data(){
      return{
        data:""
      }
    },
    components:{
      Header
    },
    methods:{
      getData(){
        this.$axios.get('/hhdj/news/newsList.do?page=1&rows=10&type=7').then(res => {
          console.log(res)
          this.data = res.rows
        })
      }
    },
    created(){
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .content{
    margin-top: 0.8rem;
    padding: 0.4rem 0;
    display: flex;
    flex-wrap: wrap;
  }
  .content-box{
    width: 3.2rem;
    margin: 0 0.26rem;

    .box-img{
      height: 2.8rem;
      width: 3.2rem;
      vertical-align: middle;
    }
    .box-title {
      font-size: 0.28rem;
      text-align: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 2;
    }
  }
</style>
