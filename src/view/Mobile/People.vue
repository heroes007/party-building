<template>
  <div>
    <Header title="参评议员"></Header>
    <div class="content" v-if="data.length">
      <div class="box" v-for="item in data">
        <div class="box-left">
          <img class="box-img" :src="item.header" alt="">
          <div class="box-name">{{item.username}}</div>
        </div>
        <div class="box-sch">{{item.branchName}}</div>
      </div>
    </div>
    <div class="none" v-else>
      没有选择分类！！！
    </div>
  </div>
</template>

<script>
  import Header from '../../components/top/top'
  export default {
    name: "People",
    data(){
      return{
        data:[]
      }
    },
    components:{
      Header
    },
    methods:{
      getData(){
        console.log(this.$route.query)
        this.$axios.get('/hhdj/nationComment/userList.do',this.$route.query).then(res => {
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
  }
  .box{
    padding: 0.2rem;
    display: flex;
    flex-direction: row;
    border-bottom: 0.02rem solid #ccc;
    justify-content: space-between;
    align-items: center;

    .box-left{
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .box-img{
      height: 0.56rem;
      width: 0.64rem;
    }
    .box-name{
      font-size: 0.32rem;
      margin: 0 0.2rem;
    }
    .box-sch{
      font-size: 0.32rem;
    }
  }
  .none{
    margin-top: 1.2rem;
  }
</style>
