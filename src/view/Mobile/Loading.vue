<template>
  <div>
    <Header :title='title'></Header>
    <div class="content">
      <div class="content-title">
        <img class="title-img" src="../../assets/reviewing.png" alt="">
        <div class="title-essay">正在审核中</div>
      </div>
      <div class="content-btn" @click="this.back">关闭</div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/top/top'
  export default {
    name: "Loading",
    data(){
      return{
        title:''
      }
    },
    components:{
      Header
    },
    methods:{
      getTitle(){
        this.title = this.$route.query.title
      }
    },
    created(){
      this.getTitle()
    }
  }
</script>

<style scoped lang="scss">
  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content-title{
    margin-top: 2rem;

    .title-img{
      height: 1.72rem;
    }
    .title-essay{
      font-size: 0.36rem;
    }
  }
  .content-btn{
    margin-top: 2rem;
    height: 0.8rem;
    width: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c50206;
    border: 0;
    border-radius: 0.08rem;
    color: #fff;
    font-size: 0.36rem;
  }
</style>
