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
    margin-top: 40px;
  }
  .box{
    padding: 10px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
    align-items: center;

    .box-left{
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .box-img{
      height: 28px;
      width: 32px;
    }
    .box-name{
      font-size: 16px;
      margin: 0 10px;
    }
    .box-sch{
      font-size: 16px;
    }
  }
  .none{
    margin-top: 60px;
  }
</style>
