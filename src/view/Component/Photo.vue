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
    margin-top: 40px;
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
  }
  .content-box{
    width: 160px;
    margin: 0 13px;

    .box-img{
      height: 140px;
      width: 160px;
      vertical-align: middle;
    }
    .box-title {
      font-size: 14px;
      text-align: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 2;
    }
  }
</style>
